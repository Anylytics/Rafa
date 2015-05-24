// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/template', 'fullpage', 'mapbox', 'omnivore'], function ( Ractive, html, fullpage, mapbox, omnivore) {


    var sampleRactive = new Ractive({
      el: 'ractiveDiv',
      template: html,
      data: {
        greeting: "Hello, World"
      }
    });

    L.mapbox.accessToken = 'pk.eyJ1IjoiZ3VpbHR5c3BhcmsiLCJhIjoiSHFCN3dORSJ9.FEKH5Kb6J5aK7ezNtn9BeQ';
	var map = L.mapbox.map('slide2', "guiltyspark.795c22b8", { zoomControl: false })
	.setView([0, 0], 2);
	
	// Disable drag and zoom handlers.
	map.dragging.disable();
	map.touchZoom.disable();
	map.doubleClickZoom.disable();
	map.scrollWheelZoom.disable();

	omnivore.csv('./static/data/data.csv').addTo(map);
	
	$(document).ready(function() {
		
		var wid = $( "#pixel-canvas" ).width();
		var hei = $( "#pixel-canvas" ).height();
		
		var x = Math.floor(wid/40);
		var y = Math.floor(hei/40);
		
		console.log("x:" + x + " y:" + y);
		
		for (var i = 0; i < x*y; i++) {
			$( "#pixel-canvas" ).append( "<div class='pixel'></div>" );
		}
		
	});
	
	



    return sampleRactive;

});
