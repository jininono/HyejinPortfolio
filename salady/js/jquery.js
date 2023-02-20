$(document).ready(function(){ 

	//gnb
	$(".sub_wrap").css("display","none");
	$("#gnb > li").on("mouseover",function(){
		$(this).children("a").css("color","#226140");
		$(this).find(".sub_wrap").stop().slideDown(300);
	});

	$("#gnb > li").on("mouseout",function(){
		$(this).children("a").css("color","#333");
		$(".sub_wrap").stop().slideUp(300);
	});

	//sidebar
	$("#sidebar_bg").css("display","none");
	$(".sidebar_btn").on('click', function(event) {
		$("#sidebar_bg").css("display","block");
		$("#sidebar").addClass("on");
	});

	$(".sidebar_inner .close").on('click', function(event) {
		$("#sidebar_bg").css("display","none");
		$("#sidebar").removeClass("on");
	});

	//sidebar_submenu
	$(".gnb_submenu").css("display","none");
	$("#sidebar_gnb > li > a").on('click', function(event) {
		if($(this).hasClass('open')==true){ /*open클래스는 가상 존재*/
			$(this).siblings('.gnb_submenu').slideToggle(300);

		}else{
			$(".gnb_submenu").stop().slideUp(300);
			$(this).siblings('.gnb_submenu').stop().slideDown(300);
			$("#sidebar_gnb > li > a").removeClass('open');
			$(this).addClass('open');
		}
	});

	//slick_slide
	$(".pc_slide_group").slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplaySpeed: 5000,
		fade: true,
		cssEase: 'linear', //페이드
		infinite: true,
		autoplay: true,
		pauseOnHover: false,//마우스 오버 시
		pauseOnFocus: true //클릭 시
	});

	$(".mo_slide_group").slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplaySpeed: 5000,
		infinite: true,
		autoplay: true,
		pauseOnHover: false,
		pauseOnFocus: true
	});


});