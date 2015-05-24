// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/winners', 'jquery','jqueryui', 'bootstrap', 'flip'], function ( Ractive, html, $, jqueryui, bootstrap, flip) {


	var nadalRactive = new Ractive({
	  el: 'slide4',
	  template: html,
      data: {
        "winners": [
					{"Year":1978,"Country":" SWE","Champion":"Bjorn Borg","Score":"6–1, 6–1, 6–3"},
					{"Year":1979,"Country":" SWE","Champion":"Bjorn Borg","Score":"6–3, 6–1, 6–7(6–8), 6–4"},
					{"Year":1980,"Country":" SWE","Champion":"Bjorn Borg","Score":"6–4, 6–1, 6–2"},
					{"Year":1981,"Country":" SWE","Champion":"Bjorn Borg","Score":"6–1, 4–6, 6–2, 3–6, 6–1"},
					/*{"Year":1982,"Country":" SWE","Champion":"Mats Wilander","Score":"1–6, 7–6(8–6), 6–0, 6–4"},
					{"Year":1983,"Country":" FRA","Champion":"Yannick Noah","Score":"6–2, 7–5, 7–6(7–3)"},
					{"Year":1984,"Country":" TCH","Champion":"Ivan Lendl","Score":"3–6, 2–6, 6–4, 7–5, 7–5"},
					{"Year":1985,"Country":" SWE","Champion":"Mats Wilander","Score":"3–6, 6–4, 6–2, 6–2"},
					{"Year":1986,"Country":" TCH","Champion":"Ivan Lendl","Score":"6–3, 6–2, 6–4"},
					{"Year":1987,"Country":" TCH","Champion":"Ivan Lendl","Score":"7–5, 6–2, 3–6, 7–6(7–3)"},
					{"Year":1988,"Country":" SWE","Champion":"Mats Wilander","Score":"7–5, 6–2, 6–1"},
					{"Year":1989,"Country":" USA","Champion":"Michael Chang","Score":"6–1, 3–6, 4–6, 6–4, 6–2"},
					{"Year":1990,"Country":" ECU","Champion":"Andrés Gómez","Score":"6–3, 2–6, 6–4, 6–4"},
					{"Year":1991,"Country":" USA","Champion":"Jim Courier","Score":"3–6, 6–4, 2–6, 6–1, 6–4"},
					{"Year":1992,"Country":" USA","Champion":"Jim Courier","Score":"7–5, 6–2, 6–1"},
					{"Year":1993,"Country":" ESP","Champion":"Sergi Bruguera","Score":"6–4, 2–6, 6–2, 3–6, 6–3"},
					{"Year":1994,"Country":" ESP","Champion":"Sergi Bruguera","Score":"6–3, 7–5, 2–6, 6–1"},
					{"Year":1995,"Country":" AUT","Champion":"Thomas Muster","Score":"7–5, 6–2, 6–4"},
					{"Year":1996,"Country":" RUS","Champion":"Yevgeny Kafelnikov","Score":"7–6(7–4), 7–5, 7–6(7–4)"},
					{"Year":1997,"Country":" BRA","Champion":"Gustavo Kuerten","Score":"6–3, 6–4, 6–2"},
					{"Year":1998,"Country":" ESP","Champion":"Carlos Moyà","Score":"6–3, 7–5, 6–3"},
					{"Year":1999,"Country":" USA","Champion":"Andre Agassi","Score":"1–6, 2–6, 6–4, 6–3, 6–4"},
					{"Year":2000,"Country":" BRA","Champion":"Gustavo Kuerten","Score":"6–2, 6–3, 2–6, 7–6(8–6)"},
					{"Year":2001,"Country":" BRA","Champion":"Gustavo Kuerten","Score":"6–7(3–7), 7–5, 6–2, 6–0"},
					{"Year":2002,"Country":" ESP","Champion":"Albert Costa","Score":"6–1, 6–0, 4–6, 6–3"},*/
					{"Year":2003,"Country":" ESP","Champion":"Juan Carlos Ferrero","Score":"6–1, 6–3, 6–2"},
					{"Year":2004,"Country":" ARG","Champion":"Gaston Gaudio","Score":"0–6, 3–6, 6–4, 6–1, 8–6"},
					{"Year":2005,"Country":" ESP","Champion":"Rafael Nadal","Score":"6–7(6–8), 6–3, 6–1, 7–5"},
					{"Year":2006,"Country":" ESP","Champion":"Rafael Nadal","Score":"1–6, 6–1, 6–4, 7–6(7–4)"},
					{"Year":2007,"Country":" ESP","Champion":"Rafael Nadal","Score":"6–3, 4–6, 6–3, 6–4"},
					{"Year":2008,"Country":" ESP","Champion":"Rafael Nadal","Score":"6–1, 6–3, 6–0"},
					{"Year":2009,"Country":"  SUI","Champion":"Roger Federer","Score":"6–1, 7–6(7–1), 6–4"},
					{"Year":2010,"Country":" ESP","Champion":"Rafael Nadal","Score":"6–4, 6–2, 6–4"},
					{"Year":2011,"Country":" ESP","Champion":"Rafael Nadal","Score":"7–5, 7–6(7–3), 5–7, 6–1"},
					{"Year":2012,"Country":" ESP","Champion":"Rafael Nadal","Score":"6–4, 6–3, 2–6, 7–5"},
					{"Year":2013,"Country":" ESP","Champion":"Rafael Nadal","Score":"6–3, 6–2, 6–3"},
					{"Year":2014,"Country":" ESP","Champion":"Rafael Nadal","Score":"3–6, 7–5, 6–2, 6–4"}
		],
					firstname: function ( name ) {
						var nameArr = name.split(" ");
						return nameArr[0];
					}
      }
	});
	
	
	$(function() {
		  $(".card").flip({
				trigger: "hover"
		  });
	});
	
    return nadalRactive;

});
