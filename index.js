export default function slash(path) {
	const isExtendedLengthPath = path.startsWith('\\\\?\\');

	if (isExtendedLengthPath) {
		return path;
	}

	let index = path.indexOf('\\');
	if (index === -1) {
		return path;
	}

	let result = '';
	let cursor = 0;

	do {
		result += path.slice(cursor, index) + '/';
		cursor = index + 1;
		index = path.indexOf('\\', cursor);
	} while (index !== -1);

	return result + path.slice(cursor);
}
