'use strict';
module.exports = function (str) {
	// Windows supports slash paths if it's not an
	// extended-length path and doesn't contain any Unicode
	// http://msdn.microsoft.com/en-us/library/aa365247.aspx
	var isExtendedLengthPath = /^\\\\\?\\/.test(str);
	var hasNonAscii = /[^\x00-\x80]+/.test(str);

	if (isExtendedLengthPath || hasNonAscii) {
		return str;
	}

	return str.replace(/\\/g, '/');
};
