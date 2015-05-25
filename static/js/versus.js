// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/versus', 'jquery', 'bootstrap'], function ( Ractive, html, $, bootstrap) {

	var versusRactive = new Ractive({
	  el: 'slide6',
	  template: html
	});
	
    return versusRactive;

});
