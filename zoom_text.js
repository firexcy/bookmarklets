javascript: (function() {
	var p = document.getElementsByTagName('*');
	for (i = 0; i < p.length; i++) {
		if (p[i].style.fontSize) {
			var s = parseInt(p[i].style.fontSize.replace("px", ""));
		} else {
			var s = 17;
		}
		
		s += 2;
		p[i].style.fontSize = s + "px"
	}
})();