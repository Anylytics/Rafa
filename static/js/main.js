// First we have to configure RequireJS
require.config({
    // This tells RequireJS where to find Ractive and rvc
    paths: {
        ractive: 'lib/ractive',
        rv: 'loaders/rv',
        mapbox: 'lib/mapbox',
        jquery: 'lib/jquery-1.11',
        jqueryui: 'lib/jquery_ui',
        fullpage: 'lib/jquery.fullPage.min',
        slimscroll: 'lib/jquery.slimscroll.min',
        responseimg: 'lib/jquery.rwdImageMaps.min',
        csv2geojson: 'lib/csv2geojson',
        omnivore: 'lib/leaflet-omnivore.min',
		bootstrap: 'bootstrap/bootstrap.min',
		nadal: 'nadal',
		frenchopen: 'french-open',
		winners: 'winners',
		timeline: 'lib/timeline/js/storyjs-embed',
		flip: 'lib/flip'
    },
    shim: {
    	"fullpage": {
    		deps: [ "jquery", "slimscroll" ]
    	},
    	'slimscroll': {
    		deps: [ "jquery" ]
    	},
		'bootstrap': {
			deps: [ "jquery" ]
		},
    	'omnivore': {
    		deps: [ "csv2geojson" ]
    	}, 
		'fullpage-config': {
			deps: [ "jquery", "jqueryui", "nadal", "frenchopen", "template", "winners", "timeline", "flip" ]
		},
		'nadal': {
			deps: ["jquery", "jqueryui" ]
		},
		'flip': {
			deps: ["jquery"]
		}/*,
		'frenchopen': {
			deps: ["jquery", "timeline"]
		}*/
    }
});


require(["template", "fullpage-config", "loader"]);

