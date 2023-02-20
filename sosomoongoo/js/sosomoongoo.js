$(document).ready(function(){ 

	$(window).on("scroll",function(){

		//Top icon 스크롤
		var pos = $("html").scrollTop();

		if(pos<20){ /*스크롤 20 미만이 되면 opacity 0가 되라*/
			$("#btn").addClass("on");
		}else {
			$("#btn").removeClass("on"); /*그외는 전부 opacity 1*/
		}
	});

	//slide 무한 루프 효과
	function move (){
		$(".slide-group ul").animate({
			left:"-380px" //width 300px + margin-right 80px
		},{
			duration: 1000,
			delay: 500,
			easing:"swing",
			complete:function(){
				var $clone = $(".slide-group .slide").first().clone();
				$(".slide-group ul").append($clone);
				$(".slide-group .slide").first().remove();
				$(".slide-group ul").css({"left":"0px"});
			}
		});
	}

	setInterval (move, 4000);

	//slide 드래그 효과
	var $target = $(".slide-group");
		var fx;
		var winWidth = $(window).innerWidth();

		$target.on("mousedown",function(){
			fx = event.pageX - $(this).offset().left;
			fnMouseMove();
		});

		function fnMouseMove(){
			$("html").on("mousemove",function(){
				
				event.preventDefault();
				
				var newX = event.pageX - fx;
				if(newX > 0){
					newX = 0;
				}
				//왼쪽으로 갈수있는 최대값(전체길이-브라우저너비)은 대상의 마지막을 오른쪽에 맞추기 위함.
				var maxLeft = $target.width() - winWidth;

				if(newX < -maxLeft){
					newX = -maxLeft; 
				}

				$target.css({
					"left":newX
				});
			});

			$("html").on("mouseup",function(){
				$(this).off();
			});
		}

		//리사이징
			$(window).on("resize",function(){

				$(".slide-group").css({
					"left":"0px"
				});
			});
		
});