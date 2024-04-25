$(function () {

	var siedbarClose = $(".sidebar_inner .close");
	var siedbarGnb = $("#sidebar_gnb > li > a");
	var gnbA = $('header #gnb>li>a');
	var gnbScroll = $('#gnb_scroll li a');
	var imgMobile = $('.portfolio_group .inner .mobile_box');
	var imgDesk = $('#portfolio3 .inner .desktop_box');

	//siedbar
	$("#sidebar_bg").css("display", "none");
	$("#sidebar_btn").on('click', function () {
		$("#sidebar_bg").css("display", "block");
		$("#sidebar_btn").css("display", "none");
		$("#sidebar").addClass("on");
	});

	siedbarClose.on('click', function () {
		$("#sidebar_bg").css("display", "none");
		$("#sidebar_btn").css("display", "block");
		$("#sidebar").removeClass("on");
	});

	//sidebar_submenu
	$(".gnb_submenu").css("display", "none");
	siedbarGnb.on('click', function () {
		$("#sidebar_bg").css("display", "none");
		$("#sidebar_btn").css("display", "block");
		$("#sidebar").removeClass("on");
	});

	//vh 계산
	function vh(v) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return (v * h) / 100;
	}
	
	$(window).resize(function () {

		if (window.innerWidth > 767) {
			
			imgMobile.hover(function (){
				$(this).find('.img_box').css('background-position', '0 100%');
			}, function(){
				$(this).find('.img_box').css('background-position', '0 0');
			});
			imgDesk.hover(function (){
				$(this).find('.img_box').css('background-position', '0 100%');
			}, function(){
				$(this).find('.img_box').css('background-position', '0 0');
			});
		}
		
		$(window).on("scroll", function () {

			var scroll = $(window).scrollTop();

			if (window.innerWidth > 1023) {

				if (scroll > 300) {
					$('header').css('background', '#fff');
				} else {
					$('header').css('background', 'none');
				}

				if ($(window).scrollTop() < vh(81)) {
					gnbA.css('background', 'none');
					bgColor('home');
				} else {
					bgBack('home');
				}

				if ($(window).scrollTop() > vh(80)) {
					gnbA.css('background', 'none');
					bgColor('about');
				} else {
					bgBack('about');
				}

				if ($(window).scrollTop() > vh(160)) {
					gnbA.css('background', 'none');
					bgColor('abillty');
				} else {
					bgBack('abillty');
				}

				if ($(window).scrollTop() > vh(240)) {
					gnbA.css('background', 'none');
					bgColor('project');
				} else {
					bgBack('project');
				}

				if ($(window).scrollTop() > vh(320)) {
					bgColor('portfolio');
				} else {
					bgBack('portfolio');
				}

				if ($(window).scrollTop() > vh(450)) {
					bgColor('portfolio2');
				} else {
					bgBack('portfolio2');
				}

				if ($(window).scrollTop() > vh(550)) {
					bgColor('portfolio3');
				} else {
					bgBack('portfolio3');
				}

				if ($(window).scrollTop() > vh(650)) {
					gnbA.css('background', 'none');
					bgColor('contact');
				} else {
					bgBack('contact');
				}
				
			} else {
				if (scroll > 100) {
					$('header').css('background', '#fff');
				}
				else {
					$('header').css('background', 'none');
				}
			}
		});
	}).resize();

	function bgColor(name) {
		gnbScroll.css({
			'background': '#ccc',
			'width': '8px',
			'height': '8px'
		});
		$('#gnb_' + name).css('background', '#e3dffd');
		$('#gnb_scroll_' + name).css({
			'background': '#C1AEFC',
			'width': '12px',
			'height': '12px'
		});
	}

	function bgBack(name) {
		$('#gnb_' + name).css('background', 'none');
		$('#gnb_scroll_' + name).css({
			'background': '#ccc',
			'width': '8px',
			'height': '8px'
		});
	}

	//vh ios 버그 방지
	function setVh() {
		document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
	}
	window.addEventListener('resize', setVh);
	setVh();
});