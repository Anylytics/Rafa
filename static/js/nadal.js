// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/nadal', 'bootstrap', 'jquery','jqueryui'], function ( Ractive, html, bootstrap, $, jqueryui) {


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
