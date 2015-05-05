// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/french-open', 'bootstrap', 'jquery','jqueryui', 'timeline'], function ( Ractive, html, bootstrap, $, jqueryui, timeline) {


	var frenchOpenRactive = new Ractive({
	  el: 'slide3',
	  template: html
	});
		
	$('#slide3').mousemove(function(e){
		var amountMovedX = (e.offsetX * -1 / 6);
		$(this).css('background-position', amountMovedX + 'px ');
	});
	
	$(document).ready(function(){
		createStoryJS({
			type:       'timeline',
			width:		'100%',
			height:     '600',
			source:     'https://docs.google.com/spreadsheet/pub?key=0Av7EfT-WtJvmdFUtcXczLVR1SWNNUHh4M1U0dE8yWEE&output=html',
			embed_id:   'french-open-timeline'           // ID of the DIV you want to load the timeline into
		});
		
	});

    return frenchOpenRactive;

});
