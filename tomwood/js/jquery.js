$(function(){

	var $header = $("header");
	var $logo = $(".logo img");
	var $gnb = $("#gnb li a");
	var $account_i = $("#account i");
	var $search_i = $(".mo_search i");

	var headerBack;
	var gnbColor;
	var logoFilter;
	var accountColor;

	var isMobile = false;

	//header gnb
	$(".sub_wrap").css("display","none");
	$("#bg").css("display","none");
	$("#product").on('mouseover', function(event) {
		$("body,html").css("overflow","hidden");
		headerBack = $header.css("background-color");
		gnbColor = $gnb.css("color");
		logoFilter = $logo.css("filter");
		accountColor = $account_i.css("color");

		$(".sub_wrap").stop().slideDown(300);
		$("#bg").css("display","block");
		$header.css("background","#fff");
		$logo.css("filter","none");
		$gnb.css("color","#111");
		$account_i.css("color","#111");
	});

	$("#product").on('mouseout', function(event) {
		$("body,html").css("overflow-y","auto");
		$(".sub_wrap").stop().slideUp(300);
		$("#bg").css("display","none");
		$header.css("background",headerBack);
		$logo.css("filter",logoFilter);
		$gnb.css("color",gnbColor);
		$account_i.css("color",accountColor);
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

	$(window).resize(function(){
		isMobile = false;

		if (window.innerWidth > 1500) {

			$(window).on("scroll",function(){

				var scroll = $(window).scrollTop();

				if(scroll > 800) {
					$header.css("background","#fff");
					$logo.css("filter","none");
					$gnb.css("color","#111");
					$account_i.css("color","#111");
				}
				else {
					$header.css("background","none");
					$logo.css("filter","invert(100%)");
					$gnb.css("color","#fff");
					$account_i.css("color","#fff");
				}

			});
		}else if (window.innerWidth > 1279) {

			$(window).on("scroll",function(){

				var scroll = $(window).scrollTop();

				if(scroll > 600) {
					$header.css("background","#fff");
					$logo.css("filter","none");
					$gnb.css("color","#111");
					$account_i.css("color","#111");
				}
				else {
					$header.css("background","none");
					$logo.css("filter","invert(100%)");
					$gnb.css("color","#fff");
					$account_i.css("color","#fff");
				}

			});
		}else if (window.innerWidth > 1023) {

			$(window).on("scroll",function(){

				var scroll = $(window).scrollTop();

				if(scroll > 600) {
					$header.css("background","#fff");
					$logo.css("filter","none");
					$gnb.css("color","#111");
					$account_i.css("color","#111");
				}
				else {
					$header.css("background","none");
					$logo.css("filter","invert(100%)");
					$gnb.css("color","#fff");
					$account_i.css("color","#fff");
				}

			});
		}else if (window.innerWidth > 767) {

			$(window).on("scroll",function(){

				var scroll = $(window).scrollTop();

				if(scroll > 500) {
					$(".sidebar_btn span").css("background-color","#000");
					$header.css("background","#fff");
					$logo.css("filter","none");
					$search_i.css("color","#111");
				}
				else {
					$(".sidebar_btn span").css("background-color","#fff");
					$header.css("background","none");
					$logo.css("filter","invert(100%)");
					$search_i.css("color","#fff");
				}

			});
		}else if (window.innerWidth > 600) {
			isMobile = true;

			$(window).on("scroll",function(){

				var scroll = $(window).scrollTop();

				if(scroll > 550) {
					$(".sidebar_btn span").css("background-color","#000");
					$header.css("background","#fff");
					$logo.css("filter","none");
					$search_i.css("color","#111");
				}
				else {
					$(".sidebar_btn span").css("background-color","#fff");
					$header.css("background","none");
					$logo.css("filter","invert(100%)");
					$search_i.css("color","#fff");
				}

			});
		}else{
			isMobile = true;

			$(window).on("scroll",function(){

				var scroll = $(window).scrollTop();

				if(scroll > 400) {
					$(".sidebar_btn span").css("background-color","#000");
					$header.css("background","#fff");
					$logo.css("filter","none");
					$search_i.css("color","#111");
				}
				else {
					$(".sidebar_btn span").css("background-color","#fff");
					$header.css("background","none");
					$logo.css("filter","invert(100%)");
					$search_i.css("color","#fff");
				}
	  		});
	  	}	
	}).resize();

	//main_visual slide
	$(".pc_slide_group").slick({
		dots: true,
		infinite: true,
		speed: 700,
		autoplaySpeed: 3000,
		fade: true,
		cssEase: 'linear', //페이드
		infinite: true,
		autoplay: true,
		pauseOnHover: false,//마우스 오버 시
		pauseOnFocus: false //클릭 시
	});

	$(".mo_slide_group").slick({
		dots: true,
		infinite: true,
		speed: 700,
		autoplaySpeed: 3000,
		fade: true,
		cssEase: 'linear',
		infinite: true,
		autoplay: true,
		pauseOnHover: false,
		pauseOnFocus: false
	});

	if(!isMobile) {
		var nowImg;
		var originSrc;
		var newSrc;

		$("#sect02 .img_box").hover(function () {
			nowImg = $(this).find('img');
			originSrc = nowImg.attr('src');

			var ext = '.' + /[^.]+$/.exec(originSrc); /*확장자 찾기*/

			newSrc = originSrc.substring(0, originSrc.lastIndexOf('.')) + '_on' + ext;
			nowImg.attr('src', newSrc);

		}, function() {
			nowImg.attr('src', originSrc);

		});
	}
	
});