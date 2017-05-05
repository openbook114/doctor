(function($){
	$(document).ready(function(){
		// Set the time at which the countdown expires.
		// var untilDate new Date(Year, Month - 1, Day)
		//-----------------------------------------------
		// var untilDate = new Date(2017, 6 - 1, 10);
		var untilDate = new Date({{year}}, {{month}}, {{day}}, {{hr}}, {{min}}, {{sec}});

		$(".countdown").countdown({
			until: untilDate,
			format: 'dHMS',
			padZeroes: true,
			timeSeparator:':',
			compact:true
		});

	}); // End document ready

})(this.jQuery);
