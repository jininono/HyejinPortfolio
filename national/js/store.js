$(function(){

	//sidebar
	var $close = $(".sidebar_inner .close");

	$(".sidebar_btn").on('click', function(event) {
		$(".sidebar_btn").css("display","none");
		$("#sidebar").addClass("on");
	});

	$close.on('click', function(event) {
		$(".sidebar_btn").css("display","block");
		$("#sidebar").removeClass("on");
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

	//scroll
	window.addEventListener("wheel", function(e){
		e.preventDefault();
	},{passive : false});

	var $html = $("html");
 
	var page = 1;
	 
	var lastPage = $("section").length + 1;
	 
	$html.animate({scrollTop:0},10);

	$(window).on("wheel", function(e){
 
		if($html.is(":animated")) return;
	 
		if(e.originalEvent.deltaY > 0){
			if(page== lastPage) return;
	 
			page++;
		}else if(e.originalEvent.deltaY < 0){
			if(page == 1) return;
	 
			page--;
		}
		var posTop = (page-1) * $(window).height();
	 
		$html.animate({scrollTop : posTop});
	 
	});

	//video
	$(window).resize(function(){

		var video = $("section video");

		if (window.innerWidth > 767) {

			video.attr("autoplay","true");
		}

	}).resize();
	
});