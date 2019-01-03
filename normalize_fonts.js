javascript: (function() {
	if (document.styleSheets.length) {
		var x = document.styleSheets[document.styleSheets.length - 1];
		x.insertRule('* { font-family: -apple-system !important; }', x.cssRules.length);
	}
})();