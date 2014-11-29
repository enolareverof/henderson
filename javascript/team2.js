var aboutArray = {
	"Mahbubur Rahman": "Mahbubur Rahman Passed out from Mercantile Marine Academy, Chittagong, Bangladesh in 1984. Thereafter he embarked on his sea career on ships of various types and sizes and ultimately climbed up to the rank of a Master and worked as a Master on various vessels for a period of more than four years. He then joined as a Marine Surveyor at HIBL in 2002 and he has carried out numerous claims related and loss prevention surveys. He is an Associate fellow of the Nautical Institute, UK and a chartered Member of the Chartered Institute of Longistics and Transport.",
	"Touhidur Rahman": "Touhidur Rahman Passed out from Mercantile Marine Academy, Chittagong, Bangladesh in 1984. Thereafter he embarked on his sea career on ships of various types and sizes and ultimately climbed up to the rank of a Master and worked as a Master on various vessels for a period of more than four years. He then joined as a Marine Surveyor at HIBL in 2002 and he has carried out numerous claims related and loss prevention surveys. He is an Associate fellow of the Nautical Institute, UK and a chartered Member of the Chartered Institute of Longistics and Transport.",
	"Zahidul Haque": "Zahidul Haque Passed out from Mercantile Marine Academy, Chittagong, Bangladesh in 1984. Thereafter he embarked on his sea career on ships of various types and sizes and ultimately climbed up to the rank of a Master and worked as a Master on various vessels for a period of more than four years. He then joined as a Marine Surveyor at HIBL in 2002 and he has carried out numerous claims related and loss prevention surveys. He is an Associate fellow of the Nautical Institute, UK and a chartered Member of the Chartered Institute of Longistics and Transport.",
	"Md. Anwar Sayem": "Md. Anwar Sayem Passed out from Mercantile Marine Academy, Chittagong, Bangladesh in 1984. Thereafter he embarked on his sea career on ships of various types and sizes and ultimately climbed up to the rank of a Master and worked as a Master on various vessels for a period of more than four years. He then joined as a Marine Surveyor at HIBL in 2002 and he has carried out numerous claims related and loss prevention surveys. He is an Associate fellow of the Nautical Institute, UK and a chartered Member of the Chartered Institute of Longistics and Transport.",
	"Md. Nasir Rahman": "Md. Nasir Rahman Passed out from Mercantile Marine Academy, Chittagong, Bangladesh in 1984. Thereafter he embarked on his sea career on ships of various types and sizes and ultimately climbed up to the rank of a Master and worked as a Master on various vessels for a period of more than four years. He then joined as a Marine Surveyor at HIBL in 2002 and he has carried out numerous claims related and loss prevention surveys. He is an Associate fellow of the Nautical Institute, UK and a chartered Member of the Chartered Institute of Longistics and Transport.",
	"Nazir Uddin Ahmed": "Nazir Uddin Ahmed Passed out from Mercantile Marine Academy, Chittagong, Bangladesh in 1984. Thereafter he embarked on his sea career on ships of various types and sizes and ultimately climbed up to the rank of a Master and worked as a Master on various vessels for a period of more than four years. He then joined as a Marine Surveyor at HIBL in 2002 and he has carried out numerous claims related and loss prevention surveys. He is an Associate fellow of the Nautical Institute, UK and a chartered Member of the Chartered Institute of Longistics and Transport."
};


$(document).ready(function(){



	$('.block').click(function(){
		// changing the source of the picture according to the click
		var imageSource = $(this).find('img').attr('src');
		$('.body-top img').attr({
			'src': imageSource
		});


		// changing the name
		var name = $(this).find('h5').text();
		$('.title h1').text(name);

		// changing the title
		var title = $(this).find('h6').text();
		$('.title h3').text(title);		
		// console.log(title);

		// changin about
		var about = aboutArray[name];
		$('.about p').text(about);
		//console.log(about);

	});

});