'use strict';
module.exports = function (str) {
	// Windows converts slash paths to backslashes if it's not an
	// extended-length path and doesn't contain any Unicode
	// http://msdn.microsoft.com/en-us/library/aa365247.aspx
	var isExtendedLengthPath = /^\\\\\?\\/.test(str);
	var hasUnicode = /[^\x00-\x80]+/.test(str);

	if (isExtendedLengthPath || hasUnicode) {
		return str;
	}

	return str.replace(/\\/g, '/');
};
