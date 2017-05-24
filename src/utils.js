const fs = require('fs');
const path = require('path');
const xss = require('xss');


exports.xss = function(content){
  //防止xss攻击，去掉HTML标签
  return xss(content, {
      whiteList:          [],        // 白名单为空，表示过滤所有标签
      stripIgnoreTag:     true,      // 过滤所有非白名单标签的HTML
      stripIgnoreTagBody: ['script'] // script标签较特殊，需要过滤标签中间的内容
  });

}


//将arr数组按每行显示numperline个元素重新成立成二维数组，用于前台hbs显示
//输入格式oldarr:[object,object...]
//输出格式newarr:[{line:[object,object,boject]},{line:[object,object,boject]}]
exports.arrayperline = function(olearr,numperline){
  let length = olearr.length;
  let linenum = Math.ceil(length / numperline);
  let newarr=[];
  for (let i = 0;i<linenum;i++){
    let line=[];
    for(let j = i*numperline;j<Math.min(i*numperline+numperline,length);j++){
      line.push(olearr[j]);
    }
    newarr.push({"line":line});
  }
  return newarr;
}

//生成上传的文件列表
//输入为multer中间件生成的上传文件req.files
//输出为符合formdata格式的文件列表，用于模拟前台form调用后台API
exports.makeformdatafile = function(files){
  let uploadfiles = [];
  for(let i=0;i<files.length;i++){
    uploadfiles.push({
      value:fs.createReadStream(path.join(path.resolve(__dirname, '..'),files[i].path)),//上传的文件存储在上级目录
      options:{
        filename:files[i].originalname,
        contentType:'image/jpeg',
        contentLength:files[i].size
      }
    })
  }
  return uploadfiles;
}

//分页,pagenum=当前页码，lastpagenum=最后页码
exports.pagination = function(pagenum,lastpagenum){
  let hava_precolon = false;
  let hava_postcolon = false;
  //当前页pagenum之前显示的页号
  let prepages=[];
  if(pagenum > 2){
    if(pagenum < 6){
      for(let i=2;i<pagenum;i++){
        prepages.push(i);
      }
    }else{
      hava_precolon = true;
      for(let i=pagenum-4;i<pagenum;i++){
        prepages.push(i);
      }
    }
  }

  //当前页pagenum之后显示的页号
  let nextpages=[];
  if(pagenum < lastpagenum - 1){
    if(pagenum > lastpagenum - 4){
      for(let i = pagenum + 1; i<lastpagenum;i++){
        nextpages.push(i);
      }
    }else{
      for(let i = pagenum + 1;i < pagenum + 3;i++){
        nextpages.push(i);
      }
      hava_postcolon = true;
    }
  }

  return [prepages,nextpages,hava_precolon,hava_postcolon]
}

//
// const request = require('request-promise');
//
// const baseUrl = "http://182.92.183.115:2090/HaiShen/services";
//
// //用户名+密码认证
// exports.auth = async function (username,password){
//   const payload = {'json_param':'{"mobile":"'+username+'","password":"'+password+'"}'}
//   try{
//     return await request.post({url:baseUrl+'/login/login',form:payload});
//   }catch(err){
//     console.log("error",err);
//   }
// }
//
// //退出登录memeberid+token
// exports.logout = async function (memberid,token){
//   const payload = {'memberid':memberid,'token':token}
//   try{
//     return await request.post({url:baseUrl+'/login/logout',form:payload});
//   }catch(err){
//     console.log("error",err);
//   }
// }
//
// exports.getFutureMeeting = async function (memberid,token,pagenum){
//   let payload ={'json_param':'{"pageno":"'+pagenum+'"}'}
//   if(token){
//     // payload = {'json_param':'{"memeberid":"'+memberid+'","token":"'+token+'"}'}
//     payload = {'memberid':memberid,'token':token,'json_param':'{"pageno":"'+pagenum+'"}'}
//   }
//   try{
//     return await request.post({url:baseUrl+'meeting/searchFeatureMeeting',form:payload});
//   }catch(err){
//     console.log("error",err);
//   }
// }
//
// exports.getMeetingDetail = async function (memberid,token,meetingid){
//   const payload = {'json_param':'{"memeberid":"'+memberid+'","token":"'+token+'","meetingid":"'+meetingid+'"}'}
//   try{
//     return await request.post({url:baseUrl+'/meeting/getMeetingDetail',form:payload});
//   }catch(err){
//     console.log("error",err);
//   }
// }
//
// exports.enrollMeeting = async function (memberid,token,meetingid,name,cardno,nickname,hospital,section,positon,qq,weixin,wxnickname,email,issharemymsg){
//   // payload = {'json_param':'{"memeberid":"'+memberid+'","token":"'+token+'","meetingid":"'+meetingid+'"}'}
//   const payload = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'", \
//     "name":"'+name+'", \
//     "cardno":"'+cardno+'",\
//     "nickname":"'+nickname+'",\
//     "hospital":"'+hospital+'",\
//     "section":"'+section+'",\
//     "positon":"'+positon+'",\
//     "qq":"'+qq+'",\
//     "weixin":"'+weixin+'",\
//     "wxnickname":"'+wxnickname+'",\
//     "email":"'+email+'",\
//     "issharemymsg":"'+issharemymsg+'",\
//   }'}
//   try{
//     return await request.post({url:baseUrl+'/meeting/registeMeeting',form:payload});
//   }catch(err){
//     console.log("error",err);
//   }
// }
//
//
// exports.cancelMeeting = async function (memberid,token,meetingid){
//     // payload = {'json_param':'{"memeberid":"'+memberid+'","token":"'+token+'","meetingid":"'+meetingid+'"}'}
//   const payload = {'memberid':memberid,'token':token,'json_param':'{"meetingid":"'+meetingid+'"}'}
//   try{
//     return await request.post({url:baseUrl+'/meeting/cancelRegisteMeeting',form:payload});
//   }catch(err){
//     console.log("error",err);
//   }
// }
//
//
// exports.getPersonInfo = async function (memberid,token){
//     // payload = {'json_param':'{"memeberid":"'+memberid+'","token":"'+token+'","meetingid":"'+meetingid+'"}'}
//   const payload = {'memberid':memberid,'token':token}
//   try{
//     return await request.post({url:baseUrl+'/member/getPersonInfo',form:payload});
//   }catch(err){
//     console.log("error",err);
//   }
// }
