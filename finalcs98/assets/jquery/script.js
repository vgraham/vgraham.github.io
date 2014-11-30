//tab on left
$(document).ready(function(){
	$("#tab").mouseenter(function(){
		$("#sidebar").fadeIn(1000);
	});
	$("#sidebar").mouseout(function(){
		$("#sidebar").fadeOut(1000);
	});

//tab on left hover ^
	
//lessons tab click drop-down menu
	$("#navbar .box:nth-child(3)").click(function(){
		$("#lessons-dropdown").slideDown("slow", function(){
		});
	 });
	$("#lessons-dropdown").mouseleave(function(){
		$("#lessons-dropdown").slideUp("slow", function(){
		});
	});
//grumble grumble

//css()
	$("#containers .container:nth-child(2)").mouseenter(function(){
		$("#pg3-containers .contenedor:nth-child(1)").css("background", "#fff");
	});
//grumble grumble



});

// $("#navbar .box:nth-child(3)").click(function() {
// 	$(this).find("#lessonbox").fadeToggle(700);
// })