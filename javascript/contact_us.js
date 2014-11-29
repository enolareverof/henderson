var mapDescription = $('.content-bottom .map-description');
var pin = $('.content-bottom .pin');

var change = true;

$(document).ready(function(){



	pin.click(function(){

		var id = $(this).attr('id');
		// console.log(id);

		mapDescription.find('h3').text(id.toUpperCase());
		mapDescription.find('h5:nth-child(2)').text("Phone: "+phone[id]);
		mapDescription.find('h5:nth-child(3)').text("Fax: "+fax[id]);
		mapDescription.find('h5:nth-child(4)').text("Mob.: "+mobile[id]);
		mapDescription.find('h5:nth-child(5)').text("E-mail: "+email[id]);
		mapDescription.find('h5:nth-child(6)').text("Web: "+website[id]);



		var top = $(this).position().top-mapDescription.height()-pin.height()-10;
		var left = $(this).position().left-(mapDescription.width()/2);
		mapDescription.css({
			'top':  top+"px",
			'left' : left+"px"
		});

		mapDescription.fadeOut(0);
		mapDescription.fadeIn(1000);
		
	});


});


var phone = {
	'australia':'+61 88241 0412',
	'india':'+91 11 2411 2596 / 2730',
	'oman':'+968 23 219 419',
	'pakistan':'+92 21 34989066',
	'philippines':'+63 2893 2776 / 893 7001',
	'singapore':'+ 65 982 88690',
	'srilanka':'+94 11 286 93 78'
};
var fax = {
	'australia':'+61 88241 0413',
	'india':'+91 11 2411 2578',
	'oman':'+968 23 219 519',
	'pakistan':'+92 21 34974105',
	'philippines':'+63 2892 6656',
	'singapore':'+ 65 918 16067',
	'srilanka':'+94 11 286 93 78'
};
var mobile = {
	'australia':'+968 23 219 519',
	'india':'+91 98100 28542 / 99208 77828',
	'oman':'+968 9949 3238',
	'pakistan':'+92 300 8238 148',
	'philippines':'+63 920 920 2506',
	'singapore':'+ 65 918 16067',
	'srilanka':'+94 72 2 25 39 27'
};
var email = {
	'australia':'gateway@henderson-australia.com.au',
	'india':'hintind@vsnl.com & india.henderson@vsnl.net',
	'oman':'harish.perinchery@gmail.com',
	'pakistan':'pak.capt.alam@hendersonpak.org',
	'philippines':'paul.thomas@thg.com.ph',
	'singapore':'kaysar@MarineXpedition.com',
	'srilanka':'samol64@sltnet.lk'
};
var website = {
	'australia':'',
	'india':'www.hendersonindia.com',
	'oman':'',
	'pakistan':'www.hendersonpak.org',
	'philippines':'www.thg.com.ph',
	'singapore':'',
	'srilanka':''
};