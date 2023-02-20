$(function(){

	var isMobile = false;

	//header gnb
	$(".sub_wrap").css("display","none");
	$("#bg").css("display","none");
	$("#product").on('mouseover', function(event) {
		$("body,html").css("overflow","hidden");
		$(".sub_wrap").stop().slideDown(300);
		$("#bg").css("display","block");
	});

	$("#product").on('mouseout', function(event) {
		$("body,html").css("overflow-y","auto");
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

	$(window).resize(function(){

		if (window.innerWidth > 1023) {

			isMobile = false;

		}else{

			isMobile = true;
		}

	}).resize();

	//scroll
	if(!isMobile) {

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
	}
	
});