jQuery(document).ready(function(){
	// $objWindow = $(window);
	// $('div[data-type="background"]').each(function(){
	// 	var $bgObj = $(this);
	// 	$(window).scroll(function() {
	// 		var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));

	// 		var coords = '100% '+ yPos + 'px';
 //            // Animate the background
	// 		 $bgObj.css({ backgroundPosition: coords });

	// 	});
	// });

	$('#header').localScroll({duration:800});

	// $("img#cleanr").hover(function(){
	//     $(this).attr("src", function(index, attr){
	//         return attr.replace("1.jpg", "2.jpg");
	//     });
	// }, function(){
	//     $(this).attr("src", function(index, attr){
	//         return attr.replace("2.jpg", "1.jpg");
	//     });
	// });
});
