$(function(){

	//header gnb
	$(".sub_wrap").css("display","none");
	$("#bg").css("display","none");
	$("#product").on('mouseover', function(event) {
		$(".sub_wrap").stop().slideDown(300);
		$("#bg").css("display","block");
	});

	$("#product").on('mouseout', function(event) {
		$(".sub_wrap").stop().slideUp(300);
		$("#bg").css("display","none");
	});

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
	
});