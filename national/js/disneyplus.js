$(function(){

	//sidebar
	var $close = $(".sidebar_inner .close");

	$(".sidebar_btn").on("click", function(event) {
		$("body,html").css("overflow","hidden");
		$(".sidebar_btn").css("display","none");
		$("#sidebar").addClass("on");
	});

	$close.on("click", function(event) {
		$("body,html").css("overflow-y","auto");
		$(".sidebar_btn").css("display","block");
		$("#sidebar").removeClass("on");
	});

	$("#box_wrap #most").on("click",function(){
		$("#box_wrap .box_menu").slideToggle(300);
	});

	$("#box_wrap .box_menu li a").on("click",function(){
		$("#box_wrap .box_menu").slideUp(300);
	});

	//section_more
	var main_top = $("#main_top video");

	var sect01_more = $("#sect01 .more");
	var sect02_more = $("#sect02 .more");
	var sect03_more = $("#sect03 .more");
	var sect04_more = $("#sect04 .more");
	var sect05_more = $("#sect05 .more");
	var sect06_more = $("#sect06 .more");
	var sect07_more = $("#sect07 .more");
	var sect08_more = $("#sect08 .more");

	//video
	$(window).resize(function(){

		if (window.innerWidth > 767) {

			main_top.attr("autoplay","true");
		}

	}).resize();

	$("section .more").on("click",function(){
		$("html").animate({
			scrollTop:"0px"
		},1000,"swing");					
	});

	sect01_more.on("click", function(event) {
		 main_top.attr("src","img/disneyplus/disneyplus01.mp4");
		 main_top.attr("poster","img/disneyplus/disneyplus01.jpeg");
	});
	
	sect02_more.on("click", function(event) {
		 main_top.attr("src","img/disneyplus/disneyplus02.mp4");
		 main_top.attr("poster","img/disneyplus/disneyplus02.jpeg");
	});

	sect03_more.on("click", function(event) {
		 main_top.attr("src","img/disneyplus/disneyplus03.mp4");
		 main_top.attr("poster","img/disneyplus/disneyplus03.jpeg");
	});

	sect04_more.on("click", function(event) {
		 main_top.attr("src","img/disneyplus/disneyplus04.mp4");
		 main_top.attr("poster","img/disneyplus/disneyplus04.jpeg");
	});

	sect05_more.on("click", function(event) {
		 main_top.attr("src","img/disneyplus/disneyplus05.mp4");
		 main_top.attr("poster","img/disneyplus/disneyplus05.jpeg");
	});

	sect06_more.on("click", function(event) {
		 main_top.attr("src","img/disneyplus/disneyplus06.mp4");
		 main_top.attr("poster","img/disneyplus/disneyplus06.jpeg");
	});

	sect07_more.on("click", function(event) {
		 main_top.attr("src","img/disneyplus/disneyplus07.mp4");
		 main_top.attr("poster","img/disneyplus/disneyplus07.jpeg");
	});

	sect08_more.on("click", function(event) {
		 main_top.attr("src","img/disneyplus/disneyplus08.mp4");
		 main_top.attr("poster","img/disneyplus/disneyplus08.jpeg");
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