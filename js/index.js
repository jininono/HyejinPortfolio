$(function(){

	var siedbarClose = $(".sidebar_inner .close");
	var siedbarGnb = $("#sidebar_gnb > li > a");

	//siedbar
	$("#sidebar_bg").css("display","none");
	$("#sidebar_btn").on('click', function() {
		$("#sidebar_bg").css("display","block");
		$("#sidebar_btn").css("display","none");
		$("#sidebar").addClass("on");
	});

	siedbarClose.on('click', function() {
		$("#sidebar_bg").css("display","none");
		$("#sidebar_btn").css("display","block");
		$("#sidebar").removeClass("on");
	});

	//sidebar_submenu
	$(".gnb_submenu").css("display","none");
	siedbarGnb.on('click', function() {
		$("#sidebar_bg").css("display","none");
		$("#sidebar_btn").css("display","block");
		$("#sidebar").removeClass("on");
	});

	//gnb 클릭 시 이동
	$('.gnb_a').on('click',function(e){

		//URL에 #id 표시되지 않도록
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000,'swing');

		if($(this).hasClass('active-color')==true){ 
			$(this).removeClass('active-color');

		}else{
			$('.gnb_a').removeClass('active-color');
			$(this).addClass('active-color');
		}

	});

	$(window).resize(function () {
		
		$(window).on("scroll", function () {

			var scroll = $(window).scrollTop();

			if (window.innerWidth > 1279) {

				if (scroll > 600) {
					$('header').css('background','#fff');
				}
				else {
					$('header').css('background','none');
				}

			}else{
				if (scroll > 100) {
					$('header').css('background','#fff');
				}
				else {
					$('header').css('background','none');
				}
			}
		});	
	}).resize();
});

