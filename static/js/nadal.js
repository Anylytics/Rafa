// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/nadal', 'jquery','jqueryui', 'bootstrap'], function ( Ractive, html, $, jqueryui, bootstrap) {


	var nadalRactive = new Ractive({
	  el: 'slide5',
	  template: html
	});
	
	
	$(function() {
		$( ".modal-dialog" ).draggable({ 
			handle: ".modal-header",
			scroll: false
		});
	});
	
    return nadalRactive;

});
