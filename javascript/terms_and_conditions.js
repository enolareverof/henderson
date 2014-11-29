$(document).ready(function(){

	var id;
	$('.term').click(function(){
		$('.term').css({
			'background-color': '',
			'color': ''
		});
		$('.conditions').css({
			'display':'none'
		});


		$(this).css({
			'background-color': '#A40A25',
			'color': 'white'
			
		});
		id = $(this).attr('id').substr(5);		
		$('#condition_'+id).css({
			'display':'block'
		});
	});


});