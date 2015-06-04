// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/versus', 'jquery', 'bootstrap', 'autocomplete'], function ( Ractive, html, $, bootstrap, autocomp) {

	var versusRactive = new Ractive({
	  el: 'slide6',
	  data: {
        aces: 50,
        df: 50,
        FstWin: 50
      },
	  template: html
	});

	var opponents = ['Gianni Mina',
					 'Mario Ancic',
					 'Hyung Taik Lee',
					 'Grigor Dimitrov',
					 'Chris Guccione',
					 'Benoit Paire',
					 'Karol Kucera',
					 'Mardy Fish',
					 'John Isner',
					 'Justin Gimelstob',
					 'Arnaud Di Pasquale',
					 'Rogerio Dutra Silva',
					 'Florian Mayer',
					 'Flavio Cipolla',
					 'Davide Sanguinetti',
					 'Dominik Hrbaty',
					 'Thomaz Bellucci',
					 'Albert Costa',
					 'Nicolas Mahut',
					 'Federico Delbonis',
					 'Mikhail Youzhny',
					 'Marcos Baghdatis',
					 'Rajeev Ram',
					 'Milos Raonic',
					 'Vincent Spadea',
					 'Fabrice Santoro',
					 'Julien Benneteau',
					 'Robin Haase',
					 'Gilles Simon',
					 'Andre Agassi',
					 'Mathieu Montcourt',
					 'Frederico Gil',
					 'Dmitry Tursunov',
					 'Ryan Sweeting',
					 'Roberto Bautista Agut',
					 'Nicolas Almagro',
					 'Igor Andreev',
					 'Juan Ignacio Chela',
					 'Lars Burgsmuller',
					 'Ivan Navarro',
					 'Eduardo Schwank',
					 'Taylor Dent',
					 'Werner Eschauer',
					 'Steve Darcis',
					 'Nikolay Davydenko',
					 'Thiemo De Bakker',
					 'Alex Calatrava',
					 'Antonio Veic',
					 'Go Soeda',
					 'Felix Mantilla',
					 'Ivo Karlovic',
					 'Tomas Berdych',
					 'Dustin Brown',
					 'Potito Starace',
					 'Franco Squillari',
					 'Alex Corretja',
					 'Alex Kuznetsov',
					 'Joao Sousa',
					 'Kei Nishikori',
					 'Denis Gremelmayr',
					 'Robert Kendrick',
					 'Guillermo Garcia Lopez',
					 'Philipp Kohlschreiber',
					 'Florent Serra',
					 'Michael Llodra',
					 'Lukas Rosol',
					 'David Ferrer',
					 'Ryan Harrison',
					 'Ivan Ljubicic',
					 'Paolo Lorenzi',
					 'Stanislas Wawrinka',
					 'Christophe Rochus',
					 'Fabio Fognini',
					 'Sergiy Stakhovsky',
					 'Andreas Seppi',
					 'Wesley Moodie',
					 'Martin Alund',
					 'Andy Roddick',
					 'Sam Querrey',
					 'Daniel Gimeno Traver',
					 'Hugo Armando',
					 'Fernando Gonzalez',
					 'Jerzy Janowicz',
					 'Lleyton Hewitt',
					 'Jo Wilfried Tsonga',
					 'Kristof Vliegen',
					 'Sjeng Schalken',
					 'Sebastien Grosjean',
					 'Karol Beck',
					 'Andreas Beck',
					 'Irakli Labadze',
					 'Tomas Zib',
					 'Ernests Gulbis',
					 'Albert Ramos',
					 'Ricardo Mello',
					 'Jeremy Chardy',
					 'Joao Souza',
					 'Dudi Sela',
					 'Juan Martin Del Potro',
					 'Mikhail Kukushkin',
					 'Richard Gasquet',
					 'Roko Karanusic',
					 'Xavier Malisse',
					 'Somdev Devvarman',
					 'Michael Russell',
					 'Lucas Pouille',
					 'Janko Tipsarevic',
					 'Ryler Deheart',
					 'Joachim Johansson',
					 'Feliciano Lopez',
					 'Albert Montanes',
					 'Kevin Kim',
					 'Benjamin Becker',
					 'Denis Istomin',
					 'Goran Ivanisevic',
					 'Karan Rastogi',
					 'Juan Carlos Ferrero',
					 'Mariano Puerta',
					 'James Blake',
					 'Andrey Golubev',
					 'Peter Wessels',
					 'Thomas Johansson',
					 'Robby Ginepri',
					 'Juan Monaco',
					 'Lee Childs',
					 'Olivier Mutis',
					 'Pablo Andujar',
					 'Ramon Delgado',
					 'Marinko Matosevic',
					 'Robin Soderling',
					 'Simone Bolelli',
					 'Lukas Lacko',
					 'Nicolas Lapentti',
					 'Santiago Ventura',
					 'Tobias Kamke',
					 'Pablo Carreno Busta',
					 'Carlos Moya',
					 'Luis Horna',
					 'Matthew Ebden',
					 'Bjorn Phau',
					 'Ivan Dodig',
					 'Carlos Berlocq',
					 'Santiago Giraldo',
					 'Gilles Muller',
					 'Donald Young',
					 'Andy Murray',
					 'Max Mirnyi',
					 'Tommy Haas',
					 'Mikhail Ledovskikh',
					 'Tim Smyczek',
					 'David Nalbandian',
					 'Michal Tabara',
					 'Nicolas Massu',
					 'Guillermo Coria',
					 'Bernard Tomic',
					 'Igor Sijsling',
					 'Kevin Anderson',
					 'Viktor Troicki',
					 'Alun Jones',
					 'Oscar Hernandez',
					 'Jesse Levine',
					 'Jimmy Wang',
					 'Marcos Daniel',
					 'Jan Hajek',
					 'Ruben Bemelmans',
					 'Jiri Vanek',
					 'Novak Djokovic',
					 'Rainer Schuettler',
					 'Philipp Petzschner',
					 'Thanasi Kokkinakis',
					 'Borna Coric',
					 'Peter Luczak',
					 'Jose Acasuso',
					 'Daniele Bracciali',
					 'Peter Gojowczyk',
					 'Tommy Robredo',
					 'Martin Vassallo Arguello',
					 'Radek Stepanek',
					 'Pierre Hugues Herbert',
					 'Nicolas Kiefer',
					 'Guillermo Canas',
					 'Alexander Waske',
					 'Pablo Cuevas',
					 'Juan Antonio Marin',
					 'Teymuraz Gabashvili',
					 'Diego Sebastian Schwartzman',
					 'Frank Dancevic',
					 'Gael Monfils',
					 'Mark Philippoussis',
					 'Marcel Granollers',
					 'Paradorn Srichaphan',
					 'Michael Berrer',
					 'Raemon Sluiter',
					 'Marin Cilic',
					 'Marat Safin',
					 'Daniel Brands',
					 'Albert Portas',
					 'Jonas Bjorkman',
					 'Filippo Volandri',
					 'Fernando Vicente',
					 'Roger Federer',
					 'Ivo Heuberger',
					 'Robert Farah',
					 'Alexandr Dolgopolov',
					 'Alberto Martin',
					 'Nicolas Devilder',
					 'Olivier Rochus',
					 'Jurgen Melzer',
					 'Scoville Jenkins',
					 'Jiri Novak',
					 'Gaston Gaudio',
					 'Arnaud Clement',
					 'Magnus Norman',
					 'Horacio Zeballos',
					 'Thierry Ascione',
					 'Dusan Lajovic',
					 'Younes El Aynaoui',
					 'Agustin Calleri',
					 'Fernando Verdasco',
					 'Dominic Thiem',
					 'Jean Rene Lisnard',
					 'Martin Klizan',
					 'Adrian Voinea',
					 'Paul Henri Mathieu',
					 'Leonardo Mayer',
					 'Nick Kyrgios',
					 'Facundo Arguello',
					 'Bobby Reynolds',
					 'Rik De Voest',
					 'Alex Bogdanovic',
					 'Tim Henman',
					 'Jarkko Nieminen',
					 'Gregory Carraz',
					 'Victor Hanescu',
					 'Jan Hernych'
	 ];

	$('#autocomplete').autocomplete({
	    lookup: opponents,
	    onSelect: function (suggestion) {
	       //console.log(suggestion.value);
	       $.ajax({
	        url: "./versus/"+suggestion.value,
	        dataTye: "json",
	        success: function(json) {
	            // Calculate Ace Percentage
	            versusRactive.set("aces", json["r_aces"]/(json["r_aces"]+json["o_aces"]) * 100);
	            versusRactive.set("df", json["r_df"]/(json["r_df"]+json["o_df"]) * 100);
	            //Rafa First Serve Win
	            rafa_fs = json["r_1stWon"] / json["r_1stIn"];
	            //Opponent First Serve Win
	            opp_fs = json["o_1stWon"] / json["o_1stIn"];
	            versusRactive.set("FstWin", rafa_fs / (rafa_fs + opp_fs) * 100);


	            console.log(versusRactive.get("aces"));
	            console.log(json);
	            

	        	}
	    	});
		}
	});

	$('#autocomplete').keypress(function() {
		adjustFontSize($(this));
	});

	$('.autocomplete-suggestions').click(function() {
		adjustFontSize($('#autocomplete'));
	});

	$('body').keyup(function(e){
	   if(e.keyCode == 8){
	   		adjustFontSize($('#autocomplete'));
	   }
	});

	function adjustFontSize(inputBox) {
	  
		var textLength = inputBox.val().length;

		if(textLength < 10) {
			inputBox.css('font-size', '1em');
		} else if (textLength >= 10	&& textLength < 20) {
			var textSize = 1-(textLength-10)/20;
			inputBox.css('font-size', textSize+'em');
		} else if (textLength >= 20 ) {
			inputBox.css('font-size', '0.5em');
		}

	}

    return versusRactive;

});
