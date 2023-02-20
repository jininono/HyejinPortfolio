$(function(){

	//sidebar
	var $close = $(".sidebar_inner .close");

	$("#sidebar_bg").css("display","none");
	$(".sidebar_btn").on('click', function(event) {
		$("body,html").css("overflow","hidden");
		$("#sidebar_bg").css("display","block");
		$(".sidebar_btn").css("display","none");
		$("#sidebar").addClass("on");
	});

	$close.on('click', function(event) {
		$("body,html").css("overflow-y","auto");
		$("#sidebar_bg").css("display","none");
		$(".sidebar_btn").css("display","block");
		$("#sidebar").removeClass("on");
	});

	//sidebar_submenu
	$(".gnb_submenu").css("display","none");
	$("#sidebar_gnb > li > a").on('click', function(event) {
		$('.gnb_submenu').stop().slideToggle(300);
	});

	//img hover
	var nowImg;
		var originSrc;
		var newSrc;

		$("section .img_box").hover(function () {
			nowImg = $(this).find('img');
			originSrc = nowImg.attr('src');

			var ext = '.' + /[^.]+$/.exec(originSrc); /*확장자 찾기*/

			newSrc = originSrc.substring(0, originSrc.lastIndexOf('.')) + '_on' + ext;
			nowImg.attr('src', newSrc);

		}, function() {
			nowImg.attr('src', originSrc);

		});

	//submenu 클릭 시 이동
	$(".a").on("click",function(){
		var a = $(this).attr("href");
		var pos = $(a).offset().top + -340;
		$("html").animate({
			scrollTop:pos
		},1000,"swing");
	})

});