$(function(){

	var ts = (new Date()).getTime() + 90*24*60*60*1000;
	
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){

		}
	});
	
});
