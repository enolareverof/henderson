var shown = false;

var height = $(".dropdown-menu-container").css('top');

$(document).ready(function(){

	$(".dropdown-menu").click(function(){

		if(shown===false){
			$(".dropdown-menu-container").animate({'top':'44'});
			//$(".dropdown-menu-container").slideDown();
			shown=true;
		}
		
		else if(shown===true){
			
			
			//console.log(height);
			$(".dropdown-menu-container").animate({'top': height });
			//$(".dropdown-menu-container").slideUp();
			shown=false;	
		}
		
	});


});