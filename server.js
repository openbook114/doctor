const express = require('express');
const app = express();
const hbs = require('hbs');
const http = require('http').Server(app);
const request = require('request-promise');
const session = require('express-session');
const Iconv = require('iconv-lite');
const multer = require('multer');
const fs = require('fs');
const logger = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');

//内存存储上传的文件
// var storage = multer.memoryStorage()
// var upload = multer({ storage: storage })

//磁盘存储上传的文件
var upload = multer({
    dest: 'uploads/' ,
    limits: {
      fileSize: 2097152,//2M
      files:5
    }
});


var router = express.Router();

let bodyParser = require('body-parser');

// 设置 Cookie
// const cookieParser = require('cookie-parser');
// app.use(cookieParser('doc2017'));

const MongoStore = require('connect-mongo')(session);

//Session使用mongodb Store
// app.use(session({
//   'secret':'doctor secret',
//   resave:false,
//   saveUninitialized:false,
//   store:new MongoStore({
//     url:'mongodb://localhost:27017/session',
//     // ttl: 14 * 24 * 60 * 60
//     ttl:  30 * 60 //30分钟
//   })
// }));

//session使用缺省的MemoryStore
app.use(session({
  'secret':'doctor secret',
  resave:false,
  saveUninitialized:false
}));

// //记录log日志到log目录下，按天生成文件
function pad(num) {
    return (num > 9 ? "" : "0") + num;
}

function generator(time, index) {
    if(!time)
        return __dirname+"/log/"+"access.log";

    var month  = time.getFullYear() + "" + pad(time.getMonth() + 1);
    var day    = pad(time.getDate());

    return __dirname+"/log/" + month + day + "-" + index + "-access.log";
}

var stream = rfs(generator, {
    size:     '10M',
    interval: '1d'
});

// setup the logger
app.use(logger('common', {skip: function (req, res) { return res.statusCode == 304 },stream: stream}))

//导入utils
var utils = require('./src/utils')

//常量声明
const baseUrl = "http://182.92.183.115:2090/HaiShen/services";
const meetingpagesize = 12;//每页显示的会议数
const videopagesize = 12;//每页显示的视频数
const commentpagesize = 10;//每页显示的评论数
const discusspagesize = 10;//每页显示的问答数
const relatevideopagesize = 10;//显示的相关视频数
const favoritepagesize = 10;//每页显示的收藏数

//设置静态文件路径
app.use(express.static('public'));

//设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
var blocks = {};
hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }
    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});
hbs.registerHelper('block', function(name) {
    var val = (blocks[name] || []).join('\n');
    blocks[name] = [];
    return val;
});

//解析json格式的body，否则POST json 数据时 body为空
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//首页
router.get('/', function (req, res) {
    res.render("index",{
      title:'良医智库，知识分享',
      logined:req.session.token ? true : false,
      nickname:req.session.nickname,
      active_index:true //主页菜单高亮显示
    });
});

//登录
router.post('/login', async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  try{
    const payload = {'json_param':'{"mobile":"'+username+'","password":"'+password+'"}'};
    const body = await request.post({url:baseUrl+'/login/login',form:payload});
    const data = JSON.parse(body);
    if(!data.token){//用户名密码错误信息
      res.render("message",{
        title:'出错',
        logined:false,
        message_title:'出错信息',
        message:data.msg
      });
    }else{
      req.session.memberid = data.memberid;
      req.session.token = data.token;
      req.session.nickname = data.nickname;
      // console.log(req.headers.referer);
      res.redirect(req.headers.referer);//返回前一页
    }
  }catch(err){
    console.log(err);
  }
});

//退出登录
router.get('/logout', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  try{
    const payload = {'memberid':memberid,'token':token};
    const body = await request.post({url:baseUrl+'/login/logout',form:payload});
    const data = JSON.parse(body);
    if(data.result == 1){
      req.session.destroy(function(error){
        if(error){
          throw error;
        }
        res.redirect("/");
      });
    }else{
      res.render("message",{
        title:'出错',
        logined:false,
        message_title:'出错信息',
        message:data.msg
      });
    }
  }catch(err){
    console.log(err);
  }
});

//会议预告
router.get('/meeting_forcast', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  let year=1999,month=1,day=1,hr=0,min=0,sec=1,ftitle='',faddress='';
  let address='',title='';

  //当前页
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      let payload ={'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+meetingpagesize+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+meetingpagesize+'"}'};
      }
      const body = await request.post({url:baseUrl+'/meeting/searchFeatureMeeting',form:payload});
      let data = JSON.parse(body);
      let carousel = [];

      let length = data.meetings.length;
      //获取轮播数据，最多3个
      for (let i=0;i<=Math.min(2,length - 1);i++){
        const payload2 = {'json_param':'{"memeberid":"'+memberid+'","token":"'+token+'","meetingid":"'+data.meetings[i].meetingid+'"}'};
        const body2 = await request.post({url:baseUrl+'/meeting/getMeetingDetail',form:payload2});
        const data2 = JSON.parse(body2);
        let content = data2.content;
        content = content.replace(/(.{50}(?!$))/g, "$1<br>");//插入<br>用于换行
        let title = data2.title;
        title = title.replace(/(.{18}(?!$))/g, "$1<br>");//插入<br>用于换行

        //根据该页面中最新的一个会议，设置会议倒计时数据
        if(i == 0){
          let strArray= data2.startdate.split(" ");
          let strDate=strArray[0].split("-");
          let strTime=strArray[1].split(":");
          year = parseInt(strDate[0]);
          month = parseInt(strDate[1]);
          day = parseInt(strDate[2]);
          hr = parseInt(strTime[0]);
          min = parseInt(strTime[1]);
          sec = parseInt(strTime[2]);
          ftitle = data2.title;
          faddress = data2.address;
        }

        //生成轮播数据
        carousel.push({title:title,content:content,startdate:data2.startdate,
          enddate:data2.enddate,address:data2.address,sponsor:data2.sponsor,imgfileid:data2.logofileid,meetingid:data2.meetingid});
      }

      for (let i=0;i< length;i++){
        //1为可报名，2为进行中，目前测试用，后面需改为1
        data.meetings[i].state =  data.meetings[i].state == 2 ? true : false;
        //0为未报名，1为已报名
        data.meetings[i].regstate = data.meetings[i].regstate == 1 ? true : false;
      }

      let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data.pagecount);

      //每行显示2个
      let meetings = utils.arrayperline(data.meetings,2);

      res.render("meeting_forcast",{
        title:'会议预告',
        active_meeting:true,
        logined:token ? true : false,
        nickname:req.session.nickname,
        meetings: meetings,
        have_meetings:length > 0 ? true : false,
        carousel:carousel,
        prepage:pagenum <= 1 ? false :true,
        nextpage:pagenum >= data.pagecount ? false : true,
        prepagenum:pagenum - 1,
        nextpagenum:pagenum + 1,
        lastpagenum:data.pagecount,
        pagenum:pagenum,
        prepages:prepages,
        nextpages:nextpages,
        hava_precolon:hava_precolon,
        hava_postcolon:hava_postcolon,
        year:year,
        pmonth:month - 1,
        month:month,
        day:day,
        hr:hr,
        min:min,
        sec:sec,
        ftitle:ftitle,
        faddress:faddress
      });
  }catch(err){
    console.log(err);
  }
});

//精彩回顾
router.get('/meeting_review', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      let payload ={'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+meetingpagesize+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+meetingpagesize+'"}'};
      }
      const body = await request.post({url:baseUrl+'/meeting/searchFinishedMeeting',form:payload});
      let data = JSON.parse(body);

      let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data.pagecount);

      //每行显示3个
      let meetings = utils.arrayperline(data.meetings,3);

      res.render("meeting_review",{
        title:'精彩回顾',
        active_meeting:true,
        logined:token ? true : false,
        nickname:req.session.nickname,
        meetings: meetings,
        have_meetings:data.meetings.length > 0 ? true : false,
        prepage:pagenum <= 1 ? false :true,
        nextpage:pagenum >= data.pagecount ? false : true,
        prepagenum:pagenum - 1,
        nextpagenum:pagenum + 1,
        lastpagenum:data.pagecount,
        pagenum:pagenum,
        prepages:prepages,
        nextpages:nextpages,
        hava_precolon:hava_precolon,
        hava_postcolon:hava_postcolon
      });
  }catch(err){
    console.log(err);
  }
});

router.get('/showImage', function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const imgfileid = req.query.imgfileid;
  res.redirect(baseUrl+'/common/showImage?memeberid='+memberid+'&token='+token+'&json_param={"imgfileid":"'+imgfileid+'"}')
});

//显示会议报名页面（如果未登录，先登录才可报名
router.get('/meeting_enroll', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const meetingid = req.query.meetingid;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
  }else{
    try{
      //用户信息
      const payload = {'memberid':memberid,'token':token}
      const body = await request.post({url:baseUrl+'/member/getPersonInfo',form:payload});
      const data = JSON.parse(body);

      //会议详情
      const payload2 = {'json_param':'{"memeberid":"'+memberid+'","token":"'+token+'","meetingid":"'+meetingid+'"}'}
      const body2 = await request.post({url:baseUrl+'/meeting/getMeetingDetail',form:payload2});
      const data2 = JSON.parse(body2);

      res.render("meeting_enroll",{
        title:'会议报名',
        active_meeting:true,
        logined:token ? true : false,
        nickname:req.session.nickname,
        meetingid:meetingid,
        personinfo:data,
        meeting:data2
      });
    }catch(err){
      console.log(err);
    }
  }
});

//会议报名
router.post('/meeting_enroll_submit', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }
  const meetingid = req.body.meetingid;
  const name = utils.xss(req.body.name);
  const cardno = req.body.cardno;
  const nickname = utils.xss(req.body.nickname);
  const hospital = utils.xss(req.body.hospital);
  const section = utils.xss(eq.body.sections);
  const position = utils.xss(req.body.position);
  const qq = utils.xss(req.body.qq);
  const weixin = utils.xss(req.body.weixin);
  const wxnickname = utils.xss(req.body.wxnickname);
  const email = utils.xss(req.body.email);
  const issharemymsg = req.body.issharemymsg;
  try{
      const payload = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'", \
        "name":"'+name+'", \
        "cardno":"'+cardno+'",\
        "nickname":"'+nickname+'",\
        "hospital":"'+hospital+'",\
        "section":"'+section+'",\
        "position":"'+position+'",\
        "qq":"'+qq+'",\
        "email":"'+email+'",\
        "weixin":"'+weixin+'",\
        "wxnickname":"'+wxnickname+'",\
        "issharemymsg":"'+issharemymsg+'"\
      }'}

      const body = await request.post({url:baseUrl+'/meeting/registeMeeting',form:payload});
      const data = JSON.parse(body);
      if (data.result == 1){
        res.render("message",{
          title:'会议报名',
          logined:token ? true : false,
          active_meeting:true, //会议菜单高亮显示
          nickname:req.session.nickname,
          message_title:'报名成功',
          message:'欢迎，我们将竭诚为您提供优质会务服务，敬请关注会议开始时间！'
        });
      }else{
        res.render("message",{
          title:'出错',
          logined:token ? true : false,
          message_title:'出错信息',
          message:data.msg
        });
      }
    }catch(err){
      console.log(err);
    }
});

//取消会议报名确认页面
router.get('/meeting_cancel', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }
  const meetingid = req.query.meetingid;
  res.render("meeting_cancel_submit",{
      title:'取消会议报名',
      logined:token ? true : false,
      active_meeting:true, //会议菜单高亮显示
      nickname:req.session.nickname,
      meetingid:meetingid,
      message_title:'取消会议报名',
      message:'请确认是否真的取消会议报名'
    });
});

//取消会议报名
router.post('/meeting_cancel_submit', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }
  const meetingid = req.body.meetingid;
  try{
      const payload = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'"}'}
      const body = await request.post({url:baseUrl+'/meeting/cancelRegisteMeeting',form:payload});
      const data = JSON.parse(body);
      if (data.result == 1){
        res.render("message",{
          title:'取消会议报名',
          logined:token ? true : false,
          active_meeting:true, //会议菜单高亮显示
          nickname:req.session.nickname,
          message_title:'取消成功',
          message:'谢谢参与，欢迎下次会议再次报名参会！'
        });
      }else{
        res.render("message",{
          title:'出错',
          logined:false,
          message_title:'出错信息',
          message:data.msg
        });
      }
    }catch(err){
      console.log(err);
    }
});

//未开会议的会议详情
router.get('/meeting_detail', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const meetingid = req.query.meetingid;
  if(!meetingid){
    res.render("message",{
      title:'出错',
      logined:token ? true : false,
      message_title:'出错信息',
      message:'您查找的会议不存在！'
    });
    return;
  }
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      //会议详情
      let payload ={'json_param':'{"meetingid":"'+meetingid+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'"}'};
      }
      const body = await request.post({url:baseUrl+'/meeting/getMeetingDetail',form:payload});
      let data = JSON.parse(body);

      if(data.meetingid == meetingid){ //有数据
        let strData = data.startdate;
        let strArray= strData.split(" ");
        let strDate=strArray[0].split("-");

        //会议议程
        const body2 = await request.post({url:baseUrl+'/meeting/getMeetingPlan',form:payload});
        let data2 = JSON.parse(body2);

        //会议评论
        let payload3 ={'json_param':'{"meetingid":"'+meetingid+'","pageno":"'+pagenum+'","pagesize":"'+commentpagesize+'"}'};
        if(token){
          payload3 = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'","pageno":"'+pagenum+'","pagesize":"'+commentpagesize+'"}'};
        }
        const body3 = await request.post({url:baseUrl+'/meeting/getMeetingComment',form:payload3});
        let data3 = JSON.parse(body3);

        let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data3.pagecount);

        res.render("meeting_detail",{
          title:'会议详情',
          active_meeting:true,
          logined:token ? true : false,
          nickname:req.session.nickname,
          meeting: data,
          meeting_plans:data2,
          have_meeting_plan:data2.length > 0 ? true : false,
          comments:data3.comments,
          have_comments:data3.pagecount > 0 ? true : false,
          isfeedesc:data.isfee == 0 ? '否' : '是',
          year:strDate[0],
          month:strDate[1],
          day:strDate[2],
          prepage:pagenum <= 1 ? false :true,
          nextpage:pagenum >= data3.pagecount ? false : true,
          prepagenum:pagenum - 1,
          nextpagenum:pagenum + 1,
          lastpagenum:data3.pagecount,
          pagenum:pagenum,
          prepages:prepages,
          nextpages:nextpages,
          hava_precolon:hava_precolon,
          hava_postcolon:hava_postcolon
        });
      }else{
        res.render("message",{
          title:'出错',
          logined:token ? true : false,
          message_title:'出错信息',
          message:'您查找的会议不存在！'
        });
      }
    }catch(err){
      console.log(err);
    }
});

//已结束会议的会议详情
router.get('/meeting_detail_finish', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const meetingid = req.query.meetingid;
  if(!meetingid){
    res.render("message",{
      title:'出错',
      logined:token ? true : false,
      message_title:'出错信息',
      message:'您查找的会议不存在！'
    });
    return;
  }

  try{
      //会议详情
      let payload ={'json_param':'{"meetingid":"'+meetingid+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'"}'};
      }
      const body = await request.post({url:baseUrl+'/meeting/getMeetingDetail',form:payload});
      let data = JSON.parse(body);

      let strArray= data.startdate.split(" ");
      let strDate=strArray[0].split("-");

      //会议议程
      const body2 = await request.post({url:baseUrl+'/meeting/getMeetingPlan',form:payload});
      let data2 = JSON.parse(body2);

      res.render("meeting_detail_finish",{
        title:'会议详情',
        active_meeting:true,
        logined:token ? true : false,
        nickname:req.session.nickname,
        have_meeting_plan:data2.length > 0 ? true : false,
        meeting: data,
        meeting_plans:data2,
        isfeedesc:data.isfee == 0 ? '否' : '是',
        year:strDate[0],
        month:strDate[1],
        day:strDate[2]
      });
    }catch(err){
      console.log(err);
    }
});

//我的会议
router.get('/my_meeting', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }
  const meetingid = req.query.meetingid;
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{

      //我的会议
      let payload = {'memberid':memberid,'token':token,'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+meetingpagesize+'"}'};
      const body = await request.post({url:baseUrl+'/meeting/getMyMeeting',form:payload});
      let data = JSON.parse(body);

      for (let i=0;i< data.meetings.length;i++){
        //1为可报名，2为进行中，3为已结束，9为结束并关闭评论
        data.meetings[i].enrollstate = data.meetings[i].state < 3  && data.meetings[i].regstate == 1 ? true :false;
        data.meetings[i].state =  data.meetings[i].state > 3 ? true : false;
      }

      let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data.pagecount);

      //每行显示4个
      let meetings = utils.arrayperline(data.meetings,3);

      res.render("my_meeting",{
        title:'我的会议',
        active_meeting:true,
        logined:token ? true : false,
        nickname:req.session.nickname,
        meetings: meetings,
        hava_meetings:data.meetings.length > 0 ? true : false,
        prepage:pagenum <= 1 ? false :true,
        nextpage:pagenum >= data.pagecount ? false : true,
        prepagenum:pagenum - 1,
        nextpagenum:pagenum + 1,
        lastpagenum:data.pagecount,
        pagenum:pagenum,
        prepages:prepages,
        nextpages:nextpages,
        hava_precolon:hava_precolon,
        hava_postcolon:hava_postcolon
      });
    }catch(err){
      console.log(err);
    }
});

router.post('/video_addviewcount', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const videoid = req.query.videoid;

  try{
      let payload ={'json_param':'{"videoid":"'+videoid+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"videoid":"'+videoid+'"}'};
      }
      const body = await request.post({url:baseUrl+'/video/addViewCount',form:payload});
      const data = JSON.parse(body);
      res.json(data);
    }catch(err){
      console.log(err);
    }
});

//会议总结
router.get('/meeting_summary', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const meetingid = req.query.meetingid;
  try{
      let payload ={'json_param':'{"meetingid":"'+meetingid+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'"}'};
      }
      let body = await request.post({url:baseUrl+'/meeting/getMeetingReview',form:payload,encoding:null});
      // res.setHeader('Content-Type', 'text/html; charset=gbk');
      // res.send(body);

      let body2= await request.post({url:baseUrl+'/meeting/getRelateVideo',form:payload});
      const data = JSON.parse(body2);

      res.render("meeting_summary",{
        title:'会议总结',
        logined:token ? true : false,
        active_meeting:true, //会议菜单高亮显示
        nickname:req.session.nickname,
        hava_relatevideo:data.length > 0 ? true : false,
        video:data[0],
        meeting:Iconv.decode(body, 'gbk').toString()
      });
    }catch(err){
      console.log(err);
    }
});

//专家讲堂
router.get('/video_expert', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      //直播视频
      let payload ={'json_param':'{"pageno":"1","pagesize":"1"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"pageno":"1","pagesize":"1"}'};
      }
      const body = await request.post({url:baseUrl+'/video/searchLiveVideo',form:payload});
      let data = JSON.parse(body);

      //专辑列表
      let payload2 ={'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+videopagesize+'"}'};
      if(token){
        payload2 = {'memberid':memberid,'token':token,'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+videopagesize+'"}'};
      }
      const body2 = await request.post({url:baseUrl+'/video/searchAlbum',form:payload2});
      let data2 = JSON.parse(body2);

      let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data2.pagecount);

      //每行显示4个
      let albums = utils.arrayperline(data2.albums,4);

      res.render("video_expert",{
        title:'专家讲堂',
        active_video:true,
        logined:token ? true : false,
        nickname:req.session.nickname,
        video:data.videos[0],
        albums: albums,
        have_albums:data2.albums.length > 0 ? true :false,
        prepage:pagenum <= 1 ? false :true,
        nextpage:pagenum >= data2.pagecount ? false : true,
        prepagenum:pagenum - 1,
        nextpagenum:pagenum + 1,
        lastpagenum:data2.pagecount,
        pagenum:pagenum,
        prepages:prepages,
        nextpages:nextpages,
        hava_precolon:hava_precolon,
        hava_postcolon:hava_postcolon
      });
  }catch(err){
    console.log(err);
  }
});

//专辑列表
router.get('/video_album', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const albumid = req.query.albumid;
  if(!albumid){
    res.render("message",{
      title:'出错',
      logined:token ? true : false,
      message_title:'出错信息',
      message:'您查找的专辑不存在！'
    });
    return;
  }

  try{
      //专辑详情
      let payload ={'json_param':'{"albumid":"'+albumid+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"albumid":"'+albumid+'"}'};
      }
      const body = await request.post({url:baseUrl+'/video/getAlbum',form:payload});
      let data = JSON.parse(body);

      if(data.albumid == albumid){ //有数据

        //获取专家简介
        let payload2 ={'json_param':'{"expertid":"'+data.expertid+'"}'};
        if(token){
          payload2 = {'memberid':memberid,'token':token,'json_param':'{"expertid":"'+data.expertid+'"}'};
        }
        const body2 = await request.post({url:baseUrl+'/video/getExpertIntroduce',form:payload2});
        let data2 = JSON.parse(body2);

        //每行显示3个
        let videos = utils.arrayperline(data.videos,3);

        res.render("video_album",{
          title:'专辑详情',
          active_video:true,
          logined:token ? true : false,
          nickname:req.session.nickname,
          videos:videos,
          expert:data2.expert,
          hospital:data2.hospital,
          coverfileid:data.coverfileid,
          // speaktime:data.speaktime,
          albumname:data.albumname,
          have_videos:data.videos.length > 0 ? true : false,
          introduce:data2.introduce
        });
      }else{
        res.render("message",{
          title:'出错',
          logined:token ? true : false,
          message_title:'出错信息',
          message:'您查找的专辑不存在！'
        });
      }
  }catch(err){
    console.log(err);
  }
});

//视频教学
router.get('/video_education', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      //视频教学
      let payload ={'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+videopagesize+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+videopagesize+'"}'};
      }
      const body = await request.post({url:baseUrl+'/video/searchEduationAlbum',form:payload});
      let data = JSON.parse(body);

      let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data.pagecount);

      //每行显示4个
      let albums = utils.arrayperline(data.albums,4);

      res.render("video_education",{
        title:'视频教学',
        active_video:true,
        logined:token ? true : false,
        nickname:req.session.nickname,
        albums: albums,
        have_albums:data.albums.length > 0 ? true :false,
        prepage:pagenum <= 1 ? false :true,
        nextpage:pagenum >= data.pagecount ? false : true,
        prepagenum:pagenum - 1,
        nextpagenum:pagenum + 1,
        lastpagenum:data.pagecount,
        pagenum:pagenum,
        prepages:prepages,
        nextpages:nextpages,
        hava_precolon:hava_precolon,
        hava_postcolon:hava_postcolon
      });
  }catch(err){
    console.log(err);
  }
});

//精彩回顾
router.get('/video_review', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      let payload ={'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+videopagesize+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+videopagesize+'"}'};
      }
      const body = await request.post({url:baseUrl+'/video/searchVideo',form:payload});
      let data = JSON.parse(body);

      let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data.pagecount);

      //每行显示3个
      let videos = utils.arrayperline(data.videos,3);

      res.render("video_review",{
        title:'精彩回顾',
        active_video:true,
        logined:token ? true : false,
        nickname:req.session.nickname,
        videos: videos,
        have_videos:data.videos.length > 0 ? true : false,
        prepage:pagenum <= 1 ? false :true,
        nextpage:pagenum >= data.pagecount ? false : true,
        prepagenum:pagenum - 1,
        nextpagenum:pagenum + 1,
        lastpagenum:data.pagecount,
        pagenum:pagenum,
        prepages:prepages,
        nextpages:nextpages,
        hava_precolon:hava_precolon,
        hava_postcolon:hava_postcolon
      });
  }catch(err){
    console.log(err);
  }
});

//视频播放
router.get('/video_play', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const videoid = req.query.videoid;
  if(!videoid){
    res.render("message",{
      title:'出错',
      logined:token ? true : false,
      message_title:'出错信息',
      message:'您查找的视频不存在！'
    });
    return;
  }
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      //视频详情
      let payload ={'json_param':'{"videoid":"'+videoid+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"videoid":"'+videoid+'"}'};
      }
      const body = await request.post({url:baseUrl+'/video/getVideo',form:payload});
      let data = JSON.parse(body);

      if (data.videoid == videoid){
        //视频评论
        let payload2 ={'json_param':'{"videoid":"'+videoid+'","pageno":"'+pagenum+'","pagesize":"'+commentpagesize+'"}'};
        if(token){
          payload2 = {'memberid':memberid,'token':token,'json_param':'{"videoid":"'+videoid+'","pageno":"'+pagenum+'","pagesize":"'+commentpagesize+'"}'};
        }
        const body2 = await request.post({url:baseUrl+'/video/getVideoComment',form:payload2});
        let data2 = JSON.parse(body2);

        //相关视频
        let payload3={'json_param':'{"videoid":"'+videoid+'","pageno":"'+pagenum+'","pagesize":"'+relatevideopagesize+'"}'};
        if(token){
          payload3 = {'memberid':memberid,'token':token,'json_param':'{"videoid":"'+videoid+'","pageno":"'+pagenum+'","pagesize":"'+relatevideopagesize+'"}'};
        }
        const body3 = await request.post({url:baseUrl+'/video/searchRelateVideo',form:payload3});
        let data3 = JSON.parse(body3);

        let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data2.pagecount);

        res.render("video_play",{
          title:'视频播放',
          active_video:true,
          logined:token ? true : false,
          nickname:req.session.nickname,
          video: data,
          comments:data2.comments,
          have_comment: data2.pagecount > 0 ? true : false,
          relatevideos:data3.videos,//只选择第一页相关视频
          have_relatevideos:data3.pagecount > 0 ? true : false,
          prepage:pagenum <= 1 ? false :true,
          nextpage:pagenum >= data2.pagecount ? false : true,
          prepagenum:pagenum - 1,
          nextpagenum:pagenum + 1,
          lastpagenum:data2.pagecount,
          pagenum:pagenum,
          prepages:prepages,
          nextpages:nextpages,
          hava_precolon:hava_precolon,
          hava_postcolon:hava_postcolon
        });
      }else{
        res.render("message",{
          title:'出错',
          logined:token ? true : false,
          message_title:'出错信息',
          message:'您查找的视频不存在！'
        });
      }

    }catch(err){
      console.log(err);
    }
});

//发布会议评论
router.post('/meeting_comment_submit', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
  }else{
    const meetingid = req.body.meetingid;
    const comment = utils.xss(req.body.comment);

    try{
        //提交会议评论
        let payload = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'","comment":"'+comment+'"}'};
        const body = await request.post({url:baseUrl+'/meeting/submitMeetingComment',form:payload});
        let data = JSON.parse(body);

        if(data.result == 1){
          res.redirect(req.headers.referer);
        }else{
          res.render("message",{
            title:'出错',
            logined:token ? true : false,
            message_title:'出错信息',
            message:data.msg
          });
        }

      }catch(err){
        console.log(err);
      }
    }
});

//发布视频评论
router.post('/video_comment_submit', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
  }else{
    const videoid = req.body.videoid;
    const comment = utils.xss(req.body.comment);

    try{
        //提交会议评论
        let payload = {'memberid':memberid,'token':token,'json_param':'{"videoid":"'+videoid+'","comment":"'+comment+'"}'};
        const body = await request.post({url:baseUrl+'/video/submitVideoComment',form:payload});
        let data = JSON.parse(body);

        if(data.result == 1){
          res.redirect(req.headers.referer);
        }else{
          res.render("message",{
            title:'出错',
            logined:token ? true : false,
            message_title:'出错信息',
            message:data.msg
          });
        }
      }catch(err){
        console.log(err);
      }
    }
});


//问题列表
router.get('/discuss_question', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      //查询提问列表
      let payload ={'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+discusspagesize+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+discusspagesize+'"}'};
      }
      const body = await request.post({url:baseUrl+'/question/searchQuestion',form:payload});
      let data = JSON.parse(body);

      for (let i=0;i< data.questions.length;i++){
        let strArray = data.questions[i].submittime.split(" ");
        let strDate=strArray[0].split("-");

        data.questions[i].year = strDate[0];
        data.questions[i].month = strDate[1];
        data.questions[i].day = strDate[2];
      }

      //查询一级分类
      const body2 = await request.post({url:baseUrl+'/common/getSectionA',form:{}});
      let data2 = JSON.parse(body2);

      const body3 = await request.post({url:baseUrl+'/common/getSectionB',form:{}});
      let data3 = JSON.parse(body3);

      let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data.pagecount);

      res.render("discuss_question",{
        title:'问题列表',
        active_discuss:true,
        logined:token ? true : false,
        nickname:req.session.nickname,
        questions:data.questions,
        sectiona:data2,
        sectionb:data3,
        memberid:memberid,
        token:token,
        prepage:pagenum <= 1 ? false :true,
        nextpage:pagenum >= data.pagecount ? false : true,
        prepagenum:pagenum - 1,
        nextpagenum:pagenum + 1,
        lastpagenum:data.pagecount,
        pagenum:pagenum,
        prepages:prepages,
        nextpages:nextpages,
        hava_precolon:hava_precolon,
        hava_postcolon:hava_postcolon
      });

    }catch(err){
      console.log(err);
    }
});

//问题详情和回答
router.get('/discuss_answer', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const questionid = req.query.questionid;
  if(!questionid){
    res.render("message",{
      title:'出错',
      logined:token ? true : false,
      message_title:'出错信息',
      message:'您查找的问题不存在！'
    });
    return;
  }
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      //查询问题详情
      let payload ={'json_param':'{"questionid":"'+questionid+'"}'};
      if(token){
        payload = {'memberid':memberid,'token':token,'json_param':'{"questionid":"'+questionid+'"}'};
      }
      const body = await request.post({url:baseUrl+'/question/getQuestion',form:payload});
      let data = JSON.parse(body);

      if(data.questionid == questionid){ //有数据

        data.imgfileids = data.imgfileids.split(',');
        data.imgfileids.pop();

        //查询问题回答列表
        let payload2 ={'json_param':'{"questionid":"'+questionid+'","pageno":"'+pagenum+'","pagesize":"'+discusspagesize+'"}'};
        if(token){
          payload2 = {'memberid':memberid,'token':token,'json_param':'{"questionid":"'+questionid+'","pageno":"'+pagenum+'","pagesize":"'+discusspagesize+'"}'};
        }
        const body2 = await request.post({url:baseUrl+'/question/getAnswers',form:payload2});
        let data2 = JSON.parse(body2);

        for (let i=0;i< data2.answers.length;i++){
          let strArray = data2.answers[i].answertime.split(" ");
          let strDate=strArray[0].split("-");

          data2.answers[i].year = strDate[0];
          data2.answers[i].month = strDate[1];
          data2.answers[i].day = strDate[2];
          data2.answers[i].imgfileids = data2.answers[i].imgfileids.split(',');
          data2.answers[i].imgfileids.pop();
        }

        let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data2.pagecount);

        res.render("discuss_answer",{
          title:'问题回答',
          active_discuss:true,
          logined:token ? true : false,
          nickname:req.session.nickname,
          memberid:memberid,
          token:token,
          question:data,
          answers:data2.answers,
          prepage:pagenum <= 1 ? false :true,
          nextpage:pagenum >= data2.pagecount ? false : true,
          prepagenum:pagenum - 1,
          nextpagenum:pagenum + 1,
          lastpagenum:data2.pagecount,
          pagenum:pagenum,
          prepages:prepages,
          nextpages:nextpages,
          hava_precolon:hava_precolon,
          hava_postcolon:hava_postcolon
        });
      }else{
        res.render("message",{
          title:'出错',
          logined:token ? true : false,
          message_title:'出错信息',
          message:'您查找的问题不存在！'
        });
      }

    }catch(err){
      console.log(err);
    }
});

//我的提问
router.get('/my_question', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      //查询提问列表
      let payload = {'memberid':memberid,'token':token,'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+discusspagesize+'"}'};
      const body = await request.post({url:baseUrl+'/question/searchMyQuestion',form:payload});
      let data = JSON.parse(body);

      for (let i=0;i< data.questions.length;i++){
        let strArray = data.questions[i].submittime.split(" ");
        let strDate=strArray[0].split("-");

        data.questions[i].year = strDate[0];
        data.questions[i].month = strDate[1];
        data.questions[i].day = strDate[2];
      }

      let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data.pagecount);

      res.render("my_question",{
        title:'我的提问',
        logined:token ? true : false,
        nickname:req.session.nickname,
        hava_question:data.questions.length > 0 ? true : false,
        questions:data.questions,
        prepage:pagenum <= 1 ? false :true,
        nextpage:pagenum >= data.pagecount ? false : true,
        prepagenum:pagenum - 1,
        nextpagenum:pagenum + 1,
        lastpagenum:data.pagecount,
        pagenum:pagenum,
        prepages:prepages,
        nextpages:nextpages,
        hava_precolon:hava_precolon,
        hava_postcolon:hava_postcolon
      });

    }catch(err){
      console.log(err);
    }
});

//删除我的提问
router.post('/my_question_delete', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }

  let questionids = req.body.question;

  try{
      let result = 1;
      let msg = "删除问题成功！";
      if(questionids instanceof Array){
        for(let i = 0; i<questionids.length;i++){
          //删除提问
          let payload = {'memberid':memberid,'token':token,'json_param':'{"questionid":"'+questionids[i]+'"}'};
          const body = await request.post({url:baseUrl+'/question/deleteQuestion',form:payload});
          let data = JSON.parse(body);
          if(data.result == -1){
            result = -1;
            msg = data.msg;
          }
        }
      }else{
          //删除提问
          let payload = {'memberid':memberid,'token':token,'json_param':'{"questionid":"'+questionids+'"}'};
          const body = await request.post({url:baseUrl+'/question/deleteQuestion',form:payload});
          let data = JSON.parse(body);
          if(data.result == -1){
            result = -1;
            msg = data.msg;
          }
      }

      if(result == 1){
        res.render("message",{
          title:'成功',
          logined:token ? true : false,
          nickname:req.session.nickname,
          message_title:'成功信息',
          message:msg
        });
      }else{
        res.render("message",{
          title:'失败',
          logined:token ? true : false,
          message_title:'失败信息',
          nickname:req.session.nickname,
          message:msg//注释：可能有部分被成功删除
        });
      }
    }catch(err){
      console.log(err);
    }
});

//我的回答
router.get('/my_answer', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      //查询回答列表
      let payload = {'memberid':memberid,'token':token,'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+discusspagesize+'"}'};
      const body = await request.post({url:baseUrl+'/question/getMyAnswers',form:payload});
      let data = JSON.parse(body);

      for (let i=0;i< data.answers.length;i++){
        let strArray = data.answers[i].answertime.split(" ");
        let strDate=strArray[0].split("-");

        data.answers[i].year = strDate[0];
        data.answers[i].month = strDate[1];
        data.answers[i].day = strDate[2];

        data.answers[i].imgfileids = data.answers[i].imgfileids.split(',');
        data.answers[i].imgfileids.pop();
      }

      let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data.pagecount);

      res.render("my_answer",{
        title:'我的回答',
        logined:token ? true : false,
        nickname:req.session.nickname,
        answers:data.answers,
        hava_answer:data.answers.length > 0 ? true : false,
        prepage:pagenum <= 1 ? false :true,
        nextpage:pagenum >= data.pagecount ? false : true,
        prepagenum:pagenum - 1,
        nextpagenum:pagenum + 1,
        lastpagenum:data.pagecount,
        pagenum:pagenum,
        prepages:prepages,
        nextpages:nextpages,
        hava_precolon:hava_precolon,
        hava_postcolon:hava_postcolon
      });

    }catch(err){
      console.log(err);
    }
});


//我的收藏
  router.get('/my_favorite', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }
  let pagenum = parseInt(req.query.pagenum);
  if(!pagenum){//第一页
    pagenum = 1;
  }

  try{
      //查询我的收藏
      let payload = {'memberid':memberid,'token':token,'json_param':'{"pageno":"'+pagenum+'","pagesize":"'+favoritepagesize+'"}'};
      const body = await request.post({url:baseUrl+'/collect/getMyFavorite',form:payload});
      let data = JSON.parse(body);

      for (let i=0;i< data.collects.length;i++){
        let strArray = data.collects[i].collecttime.split(" ");
        let strDate=strArray[0].split("-");

        data.collects[i].year = strDate[0];
        data.collects[i].month = strDate[1];
        data.collects[i].day = strDate[2];

        if(data.collects[i].objecttype == 1){
          data.collects[i].kind = "会议";

          let payload2 = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+data.collects[i].objectid+'"}'};
          let body2 = await request.post({url:baseUrl+'/meeting/getMeetingDetail',form:payload2});
          let data2 = JSON.parse(body2);

          data.collects[i].objectname = data2.title;

          if(data2.state < 3){//会议可报名、进行中
            data.collects[i].url="/meeting_detail?meetingid="+data.collects[i].objectid;
          }else{ //会议已结束
            data.collects[i].url="/meeting_detail_finish?meetingid="+data.collects[i].objectid;
          }
        }else if(data.collects[i].objecttype == 2){
          data.collects[i].kind = "视频";

          let payload2 = {'memberid':memberid,'token':token,'json_param':'{"videoid":"'+data.collects[i].objectid+'"}'};
          let body2 = await request.post({url:baseUrl+'/video/getVideo',form:payload2});
          let data2 = JSON.parse(body2);

          data.collects[i].objectname = data2.videoname;

          data.collects[i].url="/video_play?videoid="+data.collects[i].objectid;
        }else{
          data.collects[i].kind = "问答";

          data.collects[i].url="/discuss_answer?questionid="+data.collects[i].objectid;
        }
      }

      let [prepages,nextpages,hava_precolon,hava_postcolon] = utils.pagination(pagenum,data.pagecount);

      res.render("my_favorite",{
        title:'我的收藏',
        logined:token ? true : false,
        nickname:req.session.nickname,
        collects:data.collects,
        hava_collect:data.collects.length > 0 ? true : false,
        prepage:pagenum <= 1 ? false :true,
        nextpage:pagenum >= data.pagecount ? false : true,
        prepagenum:pagenum - 1,
        nextpagenum:pagenum + 1,
        lastpagenum:data.pagecount,
        pagenum:pagenum,
        prepages:prepages,
        nextpages:nextpages,
        hava_precolon:hava_precolon,
        hava_postcolon:hava_postcolon
      });

    }catch(err){
      console.log(err);
    }
});

router.post('/video_praiser', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const videoid = req.query.videoid;

  try{
      const payload = {'memberid':memberid,'token':token,'json_param':'{"videoid":"'+videoid+'"}'}
      const body = await request.post({url:baseUrl+'/video/addPraise',form:payload});
      const data = JSON.parse(body);
      res.json(data);
    }catch(err){
      console.log(err);
    }
});

router.post('/meeting_praiser', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const meetingid = req.query.meetingid;

  try{
      const payload = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'"}'}
      const body = await request.post({url:baseUrl+'/meeting/addPraise',form:payload});
      const data = JSON.parse(body);
      res.json(data);
    }catch(err){
      console.log(err);
    }
});

router.post('/discuss_question_praiser', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const questionid = req.query.questionid;

  try{
      const payload = {'memberid':memberid,'token':token,'json_param':'{"questionid":"'+questionid+'"}'}
      const body = await request.post({url:baseUrl+'/question/addQuestionPraise',form:payload});
      const data = JSON.parse(body);
      res.json(data);
    }catch(err){
      console.log(err);
    }
});

router.post('/discuss_answer_praiser', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const answerid = req.query.answerid;

  try{
      const payload = {'memberid':memberid,'token':token,'json_param':'{"answerid":"'+answerid+'"}'}
      const body = await request.post({url:baseUrl+'/question/addAnswerPraise',form:payload});
      const data = JSON.parse(body);
      res.json(data);
    }catch(err){
      console.log(err);
    }
});

//显示账户管理页面（如果未登录
router.get('/my_account', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
  }else{
    try{
      //用户信息
      const payload = {'memberid':memberid,'token':token}
      const body = await request.post({url:baseUrl+'/member/getPersonInfo',form:payload});
      const data = JSON.parse(body);

      res.render("my_account",{
        title:'账户管理',
        logined:token ? true : false,
        nickname:req.session.nickname,
        personinfo:data,
        female: data.sex == '女' ? true : false
      });
    }catch(err){
      console.log(err);
    }
  }
});

//提交账户管理信息
router.post('/my_account_submit', upload.single('file') , async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }
  const meetingid = req.body.meetingid;
  const name = utils.xss(req.body.name);
  const cardno = req.body.cardno;
  const nickname = utils.xss(req.body.nickname);
  const hospital = utils.xss(req.body.hospital);
  const section = utils.xss(req.body.sections);
  const position = utils.xss(req.body.position);
  const qq = utils.xss(req.body.qq);
  const weixin = utils.xss(req.body.weixin);
  const wxnickname = utils.xss(req.body.wxnickname);
  const email = utils.xss(req.body.email);

  const sex = req.body.sex;
  const nationnality = utils.xss(req.body.nationnality);
  const birthday = req.body.birthday;
  const academic = utils.xss(req.body.academic);
  const diploma = utils.xss(req.body.diploma);
  const province = utils.xss(req.body.province);
  const city = utils.xss(req.body.city);
  const professionaltitle = utils.xss(req.body.professionaltitle);
  const linktel = utils.xss(req.body.linktel);
  const memo = utils.xss(req.body.memo);
  const photofile = req.file;

  try{
      const payload = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'", \
        "name":"'+name+'", \
        "cardno":"'+cardno+'",\
        "nickname":"'+nickname+'",\
        "hospital":"'+hospital+'",\
        "section":"'+section+'",\
        "position":"'+position+'",\
        "qq":"'+qq+'",\
        "email":"'+email+'",\
        "weixin":"'+weixin+'",\
        "wxnickname":"'+wxnickname+'",\
        "sex":"'+sex+'",\
        "nationnality":"'+nationnality+'",\
        "birthday":"'+birthday+'",\
        "academic":"'+academic+'",\
        "diploma":"'+diploma+'",\
        "province":"'+province+'",\
        "city":"'+city+'",\
        "professionaltitle":"'+professionaltitle+'",\
        "linktel":"'+linktel+'",\
        "memo":"'+memo+'"\
      }'}
      const body = await request.post({url:baseUrl+'/member/modifyPersonInfo',form:payload});
      const data = JSON.parse(body);

      var modifyphoto = 1;//成功更新头像
      if(photofile){
        //生成formData用于提交form到后台API
        let formData = {
          memberid:memberid,
          token:token,
          file:{
            value:fs.createReadStream(path.join(__dirname ,photofile.path)),
            options:{
              filename:photofile.originalname,
              contentType:'image/jpeg',
              contentLength:photofile.size
            }
          }
        };

        let body2 = await request.post({url:baseUrl+'/member/modifyMyPhoto',formData:formData});
        let data2 = JSON.parse(body2);

        //删除上传的文件
        fs.unlink(path.join(__dirname,photofile.path),function(errro){
          if(errro){
            throw error;
          }
        });

        modifyphoto = data2.result;
      }

      if (data.result == 1){
        if(modifyphoto == 1){
          res.render("message",{
            title:'账户管理',
            logined:token ? true : false,
            nickname:req.session.nickname,
            message_title:'账户信息修改成功',
            message:'您的账户信息和头像都已更新！'
          });
        }else{
          res.render("message",{
            title:'出错',
            logined:token ? true : false,
            message_title:'您的账号信息更新成功，但头像更新失败',
            message:data2.msg
          });
        }
      }else{
        res.render("message",{
          title:'出错',
          logined:token ? true : false,
          message_title:'出错信息',
          message:data.msg
        });
      }
    }catch(err){
      console.log(err);
    }
});


//提交删除收藏
router.post('/my_favorite_delete', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }
  const collectids = req.body.collect;

  try{
    let result = 1;
    let msg = "删除收藏成功！";
    if(collectids instanceof Array){
      for(let i=0;i<collectids.length;i++){
          let payload = {'memberid':memberid,'token':token,'json_param':'{"collectid":"'+collectids[i]+'"}'}
          let body = await request.post({url:baseUrl+'/collect/delelteFavorite',form:payload});
          let data = JSON.parse(body);
          if(data.result == -1){
            result = -1;
            msg = data.msg;
          }
        }
      }else{
          //删除提问
          let payload = {'memberid':memberid,'token':token,'json_param':'{"collectid":"'+collectids+'"}'};
          const body = await request.post({url:baseUrl+'/collect/delelteFavorite',form:payload});
          let data = JSON.parse(body);
          if(data.result == -1){
            result = -1;
            msg = data.msg;
          }
      }
      if (result == 1){
        res.render("message",{
          title:'成功',
          logined:token ? true : false,
          nickname:req.session.nickname,
          message_title:'成功信息',
          message:msg
        });
      }else{
        res.render("message",{
          title:'失败',
          logined:token ? true : false,
          nickname:req.session.nickname,
          message_title:'失败信息',
          message:msg//注释：可能有部分被成功删除
        });
      }
    }catch(err){
      console.log(err);
    }
});

//会议收藏
router.post('/meeting_favorite', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const meetingid = req.query.meetingid;

  try{
      const payload = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'"}'};
      const body = await request.post({url:baseUrl+'/meeting/addFavoriteMeeting',form:payload});
      const data = JSON.parse(body);
      res.json(data);
    }catch(err){
      console.log(err);
    }
});

//视频收藏
router.post('/video_favorite', async function (req, res) {
  const memberid = req.session.memberid;
  const token = req.session.token;
  const videoid = req.query.videoid;

  try{
      const payload = {'memberid':memberid,'token':token,'json_param':'{"videoid":"'+videoid+'"}'};
      const body = await request.post({url:baseUrl+'/video/addFavoriteVideo',form:payload});
      const data = JSON.parse(body);
      res.json(data);
    }catch(err){
      console.log(err);
    }
});

//提交问题
router.post('/discuss_question_submit', upload.array('file', 5) , async function (req, res) {
  const token = req.session.token;
  const memberid = req.session.memberid;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }
  const questionid = req.body.questionid;
  const sectiona = req.body.sectiona;
  const sectionb = req.body.sectionb;
  const title = utils.xss(req.body.title);
  const question = utils.xss(req.body.question);

  //生成上传文件列表
  let uploadfiles = utils.makeformdatafile(req.files);

  //生成formData用于提交form到后台API
  var formData = {
    json_param: '{"questionid":"'+questionid+'",\
      "title":"'+title+'",\
      "sectiona":"'+sectiona+'",\
      "sectionb":"'+sectionb+'"\
      ,"question":"'+question+'"\
    }',
    memberid:memberid,
    token:token,
    file:uploadfiles
  };

  try{
    let body = await request.post({url:baseUrl+'/question/addQuestion',formData:formData});
    let data = JSON.parse(body);

    //删除上传的文件
    for(let i=0;i<req.files.length;i++){
      fs.unlink(path.join(__dirname,req.files[i].path),function(errro){
        if(errro){
          throw error;
        }
      });
    }

    if (data.result == 1){
      res.redirect("/discuss_question");
    }else{
      res.render("message",{
        title:'出错',
        logined:token ? true : false,
        message_title:'出错信息',
        message:data.msg
      });
    }
  }catch(err){
    console.log(err);
  }
});


//提交回答
router.post('/discuss_answer_submit', upload.array('file', 5) , async function (req, res) {
  const token = req.session.token;
  const memberid = req.session.memberid;
  if(!token){
    res.render("message",{
      title:'出错',
      logined:false,
      message_title:'出错信息',
      message:'您还没有登录，没有权限访问，请先登录！'
    });
    return;
  }
  const questionid = req.body.questionid;
  const answer = utils.xss(req.body.answer);

  //生成上传文件列表
  let uploadfiles = utils.makeformdatafile(req.files);

  //生成formData用于提交form到后台API
  var formData = {
    json_param: '{"questionid":"'+questionid+'","answer":"'+answer+'"}',
    memberid:memberid,
    token:token,
    file:uploadfiles
  };

  try{
    let body = await request.post({url:baseUrl+'/question/answerQuestion',formData:formData});
    let data = JSON.parse(body);

    //删除上传的文件
    for(let i=0;i<req.files.length;i++){
      fs.unlink(path.join(__dirname,req.files[i].path),function(errro){
        if(errro){
          throw error;
        }
      });
    }
    if (data.result == 1){
      res.redirect("/discuss_answer?questionid="+questionid);
    }else{
      res.render("message",{
        title:'出错',
        logined:token ? true : false,
        message_title:'出错信息',
        message:data.msg
      });
    }
  }catch(err){
    console.log(err);
  }
});

// router.get('/download', function (req, res) {
//   res.writeHead(200, {"Content-Type": "text/html"});
//   fs.readFile(path.join(__dirname,'/download.html'),function (err,data){
//       res.end(data);
//   });
// });

app.use('/', router);

http.on("error", function(error) {
    console.log(error);
});

//监听浏览器80端口访问
http.listen(80, function(){
    console.log('listening on *:80');
});
