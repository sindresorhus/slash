'use strict';
module.exports = str => {
	const isExtendedLengthPath = /^\\\\\?\\/.test(str);
	const hasNonAscii = /[^\x00-\x80]+/.test(str); // eslint-disable-line no-control-regex

	if (isExtendedLengthPath || hasNonAscii) {
		return str;
	}

	return str.replace(/\\/g, '/');
};
