'use strict';
module.exports = input => {
	const isExtendedLengthPath = /^\\\\\?\\/.test(input);
	const hasNonAscii = /[^\u0000-\u0080]+/.test(input); // eslint-disable-line no-control-regex
        const hasChinese = /[^\u4e00-\u9fa5]+/.test(input);  // has Chinese characters
	
	if (isExtendedLengthPath || (hasNonAscii&&!hasChinese)) {
		return input;
	}

	return input.replace(/\\/g, '/');
};
