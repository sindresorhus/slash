export default function slash(path, needCheckAscii = true) {
	const isExtendedLengthPath = /^\\\\\?\\/.test(path);
	const hasNonAscii = /[^\u0000-\u0080]+/.test(path); // eslint-disable-line no-control-regex

	if (isExtendedLengthPath || (needCheckAscii && hasNonAscii)) {
		return path;
	}

	return path.replace(/\\/g, '/');
}
