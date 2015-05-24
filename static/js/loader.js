define(['jquery' ], function ($) {
	
	$(document).ready(function() {
		$("#load-one").fadeOut("slow");
		$("#full-any-logo").delay( 100 ).fadeIn("fast");
		$("#full-any-logo").delay( 100 ).addClass("animated flipInX");
		$("#loading-screen").delay( 1500 ).slideUp( 500 );
	});
		
});
