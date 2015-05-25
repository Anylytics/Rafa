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
        chart: 'lib/chart.min',
		bootstrap: 'bootstrap/bootstrap.min',
        nadal: 'nadal',
        versus: 'versus',
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
        'flip': {
            deps: ["jquery"]
        }/*, 
		'fullpage-config': {
			deps: [ "jquery", "jqueryui", "nadal", "frenchopen", "template", "winners", "timeline", "flip" ]
		},
		'nadal': {
			deps: ["jquery", "jqueryui" ]
		},
<<<<<<< HEAD
=======
		/*,
>>>>>>> 62ccecfbc3e02ea33b89227ff88f7b96cc8677a2
		'frenchopen': {
			deps: ["jquery", "timeline"]
		}*/
    }
});


require(["template", "fullpage-config", "loader", "versus", "chart"]);

