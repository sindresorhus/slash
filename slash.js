(function () {
	'use strict';

	function slash(str) {
		var isExtendedLengthPath = /^\\\\\?\\/.test(str);
		var hasNonAscii = /[^\x00-\x80]+/.test(str);

		if (isExtendedLengthPath || hasNonAscii) {
			return str;
		}

		return str.replace(/\\/g, '/');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = slash;
	} else {
		window.slash = slash;
	}
})();
