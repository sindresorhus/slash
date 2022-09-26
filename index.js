export default function slash(path) {
	const isExtendedLengthPath = /^\\\\\?\\/.test(path);

	if (isExtendedLengthPath || hasNonAscii) {
		return path;
	}

	return path.replace(/\\/g, '/');
}
