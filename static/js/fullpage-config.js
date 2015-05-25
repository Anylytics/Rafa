define(['jquery', 'fullpage', 'bootstrap', 'jqueryui', 'nadal', 'template', 'french-open' ], function ($, fullpage, bootstrap, jqueryui, nadal, template, frenchopen) {

		
	$(document).ready(function() {
	    $('#fullpage').fullpage({
			'verticalCentered': false,
			'css3': false,
			'responsive':1,
			'navigation': true,
			'navigationPosition': 'left',
			'touchSensitivity': 10,
			'menu':true,
			'navigationTooltips': ['Title', 'Grand Slams', 'French Open', 'Winners','Nadal','A Champion Arises','And Falls','From the Ashes','Statistics','Can He Win?'],
			afterLoad: function(anchorLink, index){
				var loadedSection = $(this);

				//Initialize Nadal hotspot slides
				if(index == 5){
					setBoxes();
					showBoxes('#nadal-forearm');
					showBoxes('#nadal-head');
					showBoxes('#nadal-lefty');
					showBoxes('#nadal-mobile');
				}
				
        	},
			onLeave: function(index, nextIndex, direction){
				var leavingSection = $(this);

				//after leaving section 2
				if(index == 5){
					hideBoxes('#nadal-forearm');
					hideBoxes('#nadal-head');
					hideBoxes('#nadal-lefty');
					hideBoxes('#nadal-mobile');
				}
			}
		});
		
		$(function () {
		  $('[data-toggle="tooltip"]').tooltip();
		});
	});

	
	$( window ).resize(function() {
		setBoxes();
	});	
	
	
	function setBoxes() {
		var width = $( window ).width();
		var height = $( window ).height();
		var ratio = width/height;
		
		if ( ratio > 1.6 ) {
		} else {
			width = height*1.6;
		}
		
		//		 		Target DIV			Modal DIV		 	Box Size	Y-offset	X-offset
		placeBox(width, "#nadal-forearm",	"#forearmModal", 	0.045, 		0.175, 		0.23	);
		placeBox(width, "#nadal-head",		"#forearmModal", 	0.045, 		0.08, 		0.155	);
		placeBox(width, "#nadal-lefty",		"#forearmModal", 	0.045, 		0.2, 		0.29	);
		placeBox(width, "#nadal-mobile",	"#forearmModal", 	0.045, 		0.37, 		0.24	);
	}
	
	function placeBox(widthVar, targetID, modalID, boxSize, topOffset, leftOffset) {
		$( targetID ).css( "width", widthVar*boxSize );
		$( targetID ).css( "height", widthVar*boxSize );
		$( targetID ).css( "top",  widthVar*topOffset );
		$( targetID ).css( "left", widthVar*leftOffset);
		$( targetID ).click(function(){$( modalID ).modal('show');});
	}
	
	function placeCircle(widthVar, targetID, modalID, boxSize, topOffset, leftOffset) {
		$( targetID ).css( "width", widthVar*boxSize );
		$( targetID ).css( "height", widthVar*boxSize );
		$( targetID ).css( "border-radius", "50%" );
		$( targetID ).css( "top",  widthVar*topOffset );
		$( targetID ).css( "left", widthVar*leftOffset);
		$( targetID ).click(function(){$( modalID ).modal('show');});
	}

	function showBoxes(showThis) {		
		$(showThis).removeClass('animated zoomOut');
		$(showThis).addClass('animated zoomIn');
	}
	
	function hideBoxes(hideThis) {
		$(hideThis).removeClass('animated zoomIn');
		$(hideThis).addClass('animated zoomOut');		
	}
	
});
