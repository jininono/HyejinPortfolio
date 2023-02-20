$(document).ready(function(){ 

	//nav
	$(".sub-wrap").css("display","none");
	$(".gnb > li").on("mouseover",function(){
		$(this).find(".sub-wrap").stop().slideDown(200);/*해당 메인 메뉴 중 */
	});

	/*메인 메뉴 직속 li에 마우스가 나가면 마우스가 나간 해당 서브 메뉴가 사라진다*/
	$(".gnb > li").on("mouseout",function(){
		$(".sub-wrap").stop().slideUp(200); /*모든 sub-wrap 메뉴*/

	});

	//language
	$(".language-menu").css("display","none");
	$(".language > a").on('click', function() {
		$(".language-menu").slideToggle(500);
	});

	//language up/down-icon
	var i=0;
	$(".language > a").on("click",function(){
		if(i%2==0){
			$("#icon").attr("src","img/up-icon.png");
		}else{
			$("#icon").attr("src","img/down-icon.png");
		}
		i++;
	});

	//language 벗어날 경우
	$(".gnb > li").mouseover(function(e) {
		if($(".language").has(e.target).length == 0) {
		$(".language-menu").slideUp(500);
		$("#icon").attr("src","img/down-icon.png");
		}
	});

	//talk-halp .close 버튼 클릭 시 사라짐
	$("#talk-halp .close").on('click',function(){
		$("#talk-halp").css("display","none");
	});

	//search-inner
	$(".search-inner").css("display","none");
	$(".search-icon img").on('click', function() {
		$(".search-inner").slideToggle(500);
	});

	$(".gnb > li").mouseover(function(e) {
		if($(".search-inner").has(e.target).length == 0) {
		$(".search-inner").slideUp(500);
		}
	});

	$(".language > a").mousedown(function(e) {
		if($(".search-inner").has(e.target).length == 0) {
		$(".search-inner").slideUp(500);
		}
	});

	//main-silde
	var $slides = $(".slide");
	var $controls;
	var total = $slides.length; 
	var current = 0; //슬라이드 인덱스 번호
	var timer = 0; //자동 실행 아이디를 저장, 자동실행이 멈춰있는 상태를 0으로 정함

	$slides.css("left","760px");
	$slides.eq(0).css("left","0px");

	function fnMove(idx){ /*다음 슬라이드로 이동*/
		$slides.eq(current).animate({
			left:"-760px" /*동시에 현재 슬라이드는 왼쪽으로 이동*/
		},{
			duration:1000,
			easing:"swing",
			start:function(){
				$slides.eq(idx).css("left","760px"); /*다음 슬라이드를 오른쪽에 준비*/
				$slides.eq(idx).animate({ /*다음번 슬라이드 가운데로 애니메이트*/
					left:"0px"
				},1000);
			}
		});

		current = idx;
		$("#number b").text(idx+1); /*슬라이드 이동 시 슬라이드 번호 증가*/
	}

	function fnShow(idx){ /*이전 슬라이드로 이동*/
		$slides.eq(current).animate({
			left:"760px" /*동시에 현재 슬라이드는 오른쪽으로 이동(-가 없으면 오른쪽)*/
		},{
			duration:1000,
			easing:"swing",
			start:function(){
				$slides.eq(idx).css("left","-760px"); 
				$slides.eq(idx).animate({
					left:"0px"
				},1000);
			}
		});
		current = idx;
		$("#number b").text(idx+1);
	}

	//슬라이드에 번호를 주는 함수
	function setSlide(){
		if(current == 5){
			fnMove(0);

		}else{
			fnMove(current + 1);
		}			
	}

	timer = setInterval(setSlide, 5000);

	//멈춤 버튼 이미지 교체함수(timer가 0이면 자동실행이 멈춤상태로 정함)
	function fnTog(){
		if(timer == 0){ //자동실행이 멈춘상태
			$("#btn-wrap #stop").attr("src","img/play-icon.png");
		}else{ // 아니면 자동 실행중
			$("#btn-wrap #stop").attr("src","img/stop-icon.png");
		}
	}

	$("#btn-wrap #stop").on("click",function(){
		if(timer == 0){
			timer = setInterval(setSlide, 5000);
			fnTog();
		}else{
			clearInterval(timer);
			timer = 0;
			fnTog();
		}
	});

	$("#next").on("click",function(){
		clearInterval(timer);
		timer = 0; //지금 자동실행이 멈추어있다는 것을 알림
		fnTog();

		if(current == 5){
			fnMove(0);
		}else{
			fnMove(current + 1);
		}
	});

	$("#prev").on("click",function(){
		clearInterval(timer);
		timer = 0; //지금 자동실행이 멈추어있다는 것을 알림
		fnTog();

		if(current == 0){
			fnShow(5);
		}else{
			fnShow(current - 1);
		}
	});

	//allslide-popup
	$("#allslide-popup").css("display","none");
	$("#allslide-btn > button").on('click', function() {
		$("#allslide-popup").fadeIn(300);
	});

	$("#popup-close").on('click', function() {
		$("#allslide-popup").fadeOut(300);
	});

	//middle-content mouseover
	$(".middle-content").on('mouseover', function() {
		$(this).find(".title").css({
			"text-decoration":"underline",
			"font-weight":"600"
		})	
	});

	$(".middle-content").on('mouseout', function() {
		$(this).find(".title").css({
			"text-decoration":"none",
			"font-weight":"normal"
		})
	});

	//bottom-new-box mouseover
	$(".info li a").on('mouseover', function() {
		$(this).find(".dd").css("text-decoration","underline");
	});

	$(".info li a").on('mouseout', function() {
		$(this).find(".dd").css("text-decoration","none");
	});

	//footer box-menu
	$(".box-menu").css("display","none");
	$(".box-group > li").on('click', function(event) {
		if($(this).hasClass('border')==true){
			$(this).find(".box-menu").stop().slideUp(500);
			$(this).removeClass('border');

		}else{
			$(".box-menu").stop().slideUp(500);
			$(this).find(".box-menu").stop().slideDown(500);
			$(".box-group > li").removeClass('border');
			$(this).addClass('border');
		}
	});

	var i=0;
	$(".box-group > li").on("click",function(){
		if(i%2==0){
			$(this).find(".icon2").attr("src","img/down-icon.png");
		}else{
			$(this).find(".icon2").attr("src","img/up-icon.png");
		}
		i++;
	});


	

});