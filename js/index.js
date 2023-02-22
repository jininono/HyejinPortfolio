$(function(){

	//gnb 클릭 시 이동
	var gnbA = $('#gnb li a');

	gnbA.on('click',function(e){
		var a = $(this).attr('href');
		var pos = $(a).offset().top;
		
		$('html, body').animate({
			scrollTop: pos
		},1000,"swing");

		if($(this).hasClass('active-color')==true){ 
			$(this).removeClass('active-color');

		}else{
			gnbA.removeClass('active-color');
			$(this).addClass('active-color');
		}

		//URL에 #id 표시되지 않도록
		e.preventDefault();

	});

});

