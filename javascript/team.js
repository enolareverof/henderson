var slide = $('.slide');
var block = $('.block');
var proceed = true;

var slideNo = 4;

$(document).ready(function(){

	$('.right').click(function(){
		if(proceed && slideNo<=6){
			goRight();
		}
	});


	$('.left').click(function(){
		if(proceed && slideNo>1){
			goLeft();			
		}
	});

});


function goLeft(){
	slideNo--;
	console.log(slideNo);
	console.log(currentSlideLeftPosition);
	proceed=false;
	var currentSlideLeftPosition = slide.position().left;
	slide.css({
		'transform': 'translate3d('+(currentSlideLeftPosition+550+block.width())+'px,0px,0px)'
	});
	setTimeout(function(){
		proceed=true;
	},500);
}

function goRight(){
	slideNo++;
	proceed = false;
	var currentSlideLeftPosition = slide.position().left;
	
	console.log(slideNo);
	console.log(currentSlideLeftPosition);

	slide.css({
		'transform': 'translate3d('+(currentSlideLeftPosition+550-block.width())+'px,0px,0px)'
	});
	setTimeout(function(){
		proceed=true;
	},500);
}