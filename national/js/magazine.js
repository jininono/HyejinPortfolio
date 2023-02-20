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

	//sect01 hover
	var sect01 = $("#sect01 .text_wrap")

	sect01.on('mouseover',function(event){
		$(this).css({
			"color":"#fff",
			"background-color":"#000"
		})
	});

	sect01.on('mouseout',function(event){
		$(this).css({
			"color":"#1f1f1f",
			"background-color":"#ffdb00"
		})
	});

	//sect02 hover
	var sect02 = $("#sect02 .text_wrap")

	sect02.on('mouseover',function(event){
		$(this).css({
			"color":"#fff",
			"background-color":"#111"
		})
	});

	sect02.on('mouseout',function(event){
		$(this).css({
			"color":"#1f1f1f",
			"background-color":"#fff"
		})
	});

	//sect03 slide
	var swiper = new Swiper('.swiper-container', { /*초기값 모바일 기준으로 작성*/
		loop: true, /*반복*/
		centeredSlides: true, /*슬라이드 센터*/
		slidesPerView: 3, /*슬라이드 보이는 갯수*/
		slideToClickedSlide: true, /*슬라이드 클릭 시 이동*/
		effect: 'coverflow',
		coverflowEffect: {
		rotate: 0,
		slideShadows: false,
		stretch: 30, /*슬라이드 간격*/
		},
		navigation: {
		nextEl: '#sect03 #next',
		prevEl: '#sect03 #prev',
		},
		breakpoints: { //반응형
        
  			600: { //브라우저가 600보다 클 때
	            slidesPerView: 4,  
	            effect: 'coverflow',
				coverflowEffect: {
				rotate: 0,
				slideShadows: false,
				stretch: 50,
				},
          	},
          	900: { //900보다 클 때
	          	slidesPerView: 5,  
	            effect: 'coverflow',
				coverflowEffect: {
				rotate: 0,
				slideShadows: false,
				stretch: 50,
				},
          	}
        }
	});

	//search
	var input = $('input'),
    form  = $('form'),
    after = $('.after')

	input.focus(function(){
		if( form.hasClass('open') ) return;
			form.addClass('in');
			input.css("cursor","auto");
		
		setTimeout(function(){
			form.addClass('open');
			form.removeClass('in');
		}, 1300);
	});

	after.on('click', function(mode){
	  mode.preventDefault();

  	if( !form.hasClass('open') ) return;

		input.val('');
	  	form.addClass('close');
	  	form.removeClass('open');
	  	input.css("cursor","pointer");

	  	setTimeout(function(){
	    	form.removeClass('close');
	  	}, 1300);
	});

});