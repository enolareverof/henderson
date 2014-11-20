$(document).ready(function(){

		run();


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

var mCondition = true;
var firstTime = true;

// a function which changes slide
function run(){

	var amountOfSlide=$('.slide').length;
	var slideWidth = $('.slide').width();

	console.log(slideWidth);

	var position=0;
	var forward = true;
	var slideNo = 1;


	changeSlide();

	setInterval(changeSlide,5000);

	// a function that changes slide
	function changeSlide(){
		
			move(slideNo);
			if(forward==true){
				position=position+slideWidth;
				slideNo++;
			}
			if(forward==false){
				position=position-slideWidth;
				slideNo--;
			}
			if(position==slideWidth*(amountOfSlide-1) || position==0){
				forward=!forward;
			}
	} // end of function change slide


	// a function that moves slide
	function move(slideNo){


			$('.slide-holder').animate({'margin-left':-position},

				function(){


					if ( $(window).width() <= 1000 && firstTime==false) {
						//$('.window .mission').animate({'top':'-55%'});
						//console.log("hi")
					}


					if(firstTime==false){
						if(mCondition==true){
							if ( $(window).width() > 1000) {
								$('.window .slide-holder .slide .slidetext').animate({'padding-left': '7%'});
								$('.window .slide-holder .slide .slidetext').animate({'padding-right':'33%'});
								// $('.window .mission').animate({'margin-left':'785'});
								$('.window .mission').css({
									'transform':'translate3d(850px,0px,0px)'
								});
								mCondition=!mCondition;
							}
						}
						else{
							if ( $(window).width() > 1000) {
								$('.window .slide-holder .slide .slidetext').animate({'padding-left':'33%'});
								$('.window .slide-holder .slide .slidetext').animate({'padding-right':'7%'});
								// $('.window .mission').animate({'margin-left':'0'});
								$('.window .mission').css({
									'transform':'translate3d(0px,0px,0px)'
								});
								mCondition=!mCondition;
							}
						}
					}
					firstTime=false;



					var beforeSlide=slideNo-1;
					var afterSlide=slideNo+1;
					if(beforeSlide<1){
						beforeSlide=amountOfSlide;
					}
					if(afterSlide>3){
						afterSlide=1;
					}
					

					$('#slide'+slideNo+' .slidetext').animate(
						{'top':'55%'},function(){
							fade_in(
								$(this).find('h3'),
								$(this).find('p'),
								$(this).find('a')
							)
						}
					);
					
					$('#slide'+beforeSlide+' .slidetext').animate(
						{'top':'100%'},function(){
							fade_out(
								$(this).find('h3'),
								$(this).find('p'),
								$(this).find('a')
							)
						}
					);


					$('#slide'+afterSlide+' .slidetext').animate(
						{'top':'100%'},function(){
							fade_out(
								$(this).find('h3'),
								$(this).find('p'),
								$(this).find('a')
							)
						}
					);


				}
			);
	} // end of function move slide


	// function to fadeIn
	function fade_in(one,two,three){
		one.fadeIn("fast",function(){
			two.fadeIn("fast",function(){
				three.fadeIn("fast");
			});
		});
	}

	// function to fadeOut
	function fade_out(one,two,three){
		one.fadeOut(1,function(){
			two.fadeOut(1,function(){
				three.fadeOut(1);
			});
		});
	}
}
// end of function run