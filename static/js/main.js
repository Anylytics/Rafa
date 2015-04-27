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
        csv2geojson: 'lib/csv2geojson',
        omnivore: 'lib/leaflet-omnivore.min'
    },
    shim: {
    	"fullpage": {
    		deps: [ "jquery", "slimscroll" ]
    	},
    	'slimscroll': {
    		deps: [ "jquery" ]
    	},
    	'omnivore': {
    		deps: [ "csv2geojson" ]
    	}
    }
});


require(["template"]);