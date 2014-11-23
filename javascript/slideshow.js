$(document).ready(function(){

		run();
		setInterval(function(){
			run();
		},6500);

		//this is a good way
		/*$(window).resize(function() {
	    	// here your code
			run();
		});*/
		

		// another good way
		//refresh page on browser resize
		$(window).bind('resize', function(e){
			run();
		  	console.log('window resized..');
		  	this.location.reload(false); /* false to get page from cache */
		  	/* true to fetch page from server */
		});


		//refresh page on browser resize (to support firefox)
		$(window).bind('resize', function(e){
		  if (window.RT) clearTimeout(window.RT);
		  run();
		  window.RT = setTimeout(function(){
		    this.location.reload(false); /* false to get page from cache */
		  }, 200);
		});
});


var slide1 = $('#slide1');
var slide2 = $('#slide2');
var slide3 = $('#slide3');
var slide4 = $('#slide4');

var slide = 1;

// a function which changes slide
function run(){
	if(slide===1){
		Slide1();
	}
	else if(slide===2){
		Slide2();
	}
	else if(slide===3){
		Slide3();
	}
	else{
		Slide4();
	}
	slide++;
	if(slide===5){
		slide=1;
	}
}


function Slide1(){
	slide1.fadeIn(1500);
	
	slide2.fadeOut(1500);
	slide3.fadeOut(1500);
	slide4.fadeOut(1500);
}


function Slide2(){
	slide2.fadeIn(1500);

	slide1.fadeOut(1500);
	slide3.fadeOut(1500);
	slide4.fadeOut(1500);
}


function Slide3(){
	slide3.fadeIn(1500);

	slide1.fadeOut(1500);
	slide2.fadeOut(1500);
	slide4.fadeOut(1500);
}


function Slide4(){
	slide4.fadeIn(1500);
	
	slide1.fadeOut(1500);
	slide2.fadeOut(1500);
	slide3.fadeOut(1500);
}
// end of function run