$(function(){

	//sidebar
	var $close = $(".sidebar_inner .close");

	$(".sidebar_btn").on('click', function(event) {
		$("body,html").css("overflow","hidden");
		$(".sidebar_btn").css("display","none");
		$("#sidebar").addClass("on");
	});

	$close.on('click', function(event) {
		$("body,html").css("overflow-y","auto");
		$(".sidebar_btn").css("display","block");
		$("#sidebar").removeClass("on");
	});

	//main_visual slide
	$(".pc_slide_group").slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplaySpeed: 4000,
		fade: true,
		cssEase: 'linear', //페이드
		autoplay: true,
		pauseOnHover: false,//마우스 오버 시
		pauseOnFocus: false //클릭 시
	});

	$(".mo_slide_group").slick({
		dots: false,
		infinite: true,
		speed: 500,
		autoplaySpeed: 4000,
		autoplay: true,
		pauseOnHover: false,
		pauseOnFocus: false
	});

	var sect03 = $("#sect03 .content_box");
	var sect03_1 = $("#sect03 .content_box:nth-of-type(1)");
	var sect03_2 = $("#sect03 .content_box:nth-of-type(2)");
	var sect03_3 = $("#sect03 .content_box:nth-of-type(3)");
	var sect04_1 = $("#sect04 #content_wrap1");
	var sect04_2 = $("#sect04 #content_wrap2");

	$(window).resize(function(){
		if (window.innerWidth > 1279) {

			//sect02 content_wrap
			$("#next").on("click",function(){
				next("pc");
			});

			$("#prev").on("click",function(){
				prev("pc");
			});
			
			// setInterval( function() { next("pc"); }, 3000); //자동 전환

			//scroll
			sect03.css("opacity","0");
			$(window).on("scroll",function(){

				var scroll = $(window).scrollTop();

				if(scroll > 600) {
					$("header").css("background","#111");
				}
				else {
					$("header").css("background","none");
				}

				if(scroll>1500){ 
					sect03.css("opacity","1");
				}else {
					sect03.css("opacity","0");
				}
			});

			//sect04 hover
			bgChange();

		} else if (window.innerWidth > 900) {

			//sect02 content_wrap
			$("#next").on("click",function(){
				nextRe("re-1280px");
			});

			$("#prev").on("click",function(){
				prevRe("re-1280px");
			});

			//scroll
			sect03.css("opacity","0");
			$(window).on("scroll",function(){

				var scroll = $(window).scrollTop();

				if(scroll > 550) {
					$("header").css("background","#111");
				}
				else {
					$("header").css("background","none");
				}

				if(scroll>1400){ 
					sect03.css("opacity","1");
				}else {
					sect03.css("opacity","0");
				}
			});

			//sect04 hover
			bgChange();

		} else if (window.innerWidth > 500) {

			//sect02 content_wrap
			$("#next").on("click",function(){
				nextRe("re-900px");
			});

			$("#prev").on("click",function(){
				prevRe("re-900px");
			});

			//scroll
			sect03.css("opacity","0");
			$(window).on("scroll",function(){

				var scroll = $(window).scrollTop();

				if(scroll > 550) {
					$("header").css("background","#111");
				}
				else {
					$("header").css("background","none");
				}

				if(scroll>1300){ 
					sect03.css("opacity","1");
				}else {
					sect03.css("opacity","0");
				}
			});

		} else {

			//sect02 content_wrap
			$("#next").on("click",function(){
				next("mobile");
			});

			$("#prev").on("click",function(){
				prev("mobile");
			});

			sect03_1.css("opacity","0");
			sect03_2.css("opacity","0");
			sect03_3.css("opacity","0");

			$(window).scroll(function(){

				var scroll = $(window).scrollTop();

				if(scroll > 350) {
					$("header").css("background","#111");
				}
				else {
					$("header").css("background","none");
				}

				if(scroll>700){ 
					sect03_1.css("opacity","1");
				}else {
					sect03_1.css("opacity","0");
				}

				if(scroll>1200){ 
					sect03_2.css("opacity","1");
				}else {
					sect03_2.css("opacity","0");
				}

				if(scroll>1700){ 
					sect03_3.css("opacity","1");
				}else {
					sect03_3.css("opacity","0");
				}

		  	});
		}
	}).resize();

	//pc,mobile sect02 silde
	function next(mode) {
		var left = 0;

		if(mode == "mobile") left = 370; 
		if(mode == "pc") left = 330;

		$("#sect02 .content_wrap ul").animate({
			left: "-" + left + "px"
		},{
			complete:function(){
				var $clone = $("#sect02 .content_wrap ul li").first().clone();
				$("#sect02 .content_wrap ul").append($clone);
				$("#sect02 .content_wrap ul li").first().remove();
				$("#sect02 .content_wrap ul").css({"left":"0px"});
			},
			duration:1000
		});
	}

	function prev(mode) {
		var left = 0;

		if(mode == "mobile") left = 370;
		if(mode == "pc") left = 330;

		$("#sect02 .content_wrap ul").css({
			left:"-" + left + "px"
		});
		$("#sect02 .content_wrap ul").stop().animate({
			left:"0px"
		},{
			start:function(){
				var $clone = $("#sect02 .content_wrap ul li").last().clone();
				$("#sect02 .content_wrap ul").prepend($clone);
				$("#sect02 .content_wrap ul li").last().remove();
			},
			duration:1000
		});
	}

	//responsive  sect02 silde
	function nextRe(mode) {
		var left = 0;

		if(mode == "re-1280px") left = 23; 
		if(mode == "re-900px") left = 47; 

		$("#sect02 .content_wrap ul").animate({
			left: "-" + left + "vw"
		},{
			complete:function(){
				var $clone = $("#sect02 .content_wrap ul li").first().clone();
				$("#sect02 .content_wrap ul").append($clone);
				$("#sect02 .content_wrap ul li").first().remove();
				$("#sect02 .content_wrap ul").css({"left":"0vw"});
			},
			duration:1000
		});
	}

	function prevRe(mode) {
		var left = 0;

		if(mode == "re-1280px") left = 23;
		if(mode == "re-900px") left = 47; 

		$("#sect02 .content_wrap ul").css({
			left:"-" + left + "vw"
		});
		$("#sect02 .content_wrap ul").stop().animate({
			left:"0vw"
		},{
			start:function(){
				var $clone = $("#sect02 .content_wrap ul li").last().clone();
				$("#sect02 .content_wrap ul").prepend($clone);
				$("#sect02 .content_wrap ul li").last().remove();
			},
			duration:1000
		});
	}

	//sect04 hover
	function bgChange(mode) {

	sect04_1.on("mouseover",function(){
			sect04_1.css({
				"background":"url(img/magazine01_on.jpeg)",
				"background-size":"cover",
				"background-position":"center"
			});
		});

		sect04_1.on("mouseout",function(){
			sect04_1.css({
				"background":"url(img/magazine01.jpeg)",
				"background-size":"cover",
				"background-position":"center"
			});
		});

		sect04_2.on("mouseover",function(){
			sect04_2.css({
				"background":"url(img/magazine02_on.jpeg)",
				"background-size":"cover",
				"background-position":"center"
			});
		});

		sect04_2.on("mouseout",function(){
			sect04_2.css({
				"background":"url(img/magazine02.jpeg)",
				"background-size":"cover",
				"background-position":"center"
			});
		});
	}

});