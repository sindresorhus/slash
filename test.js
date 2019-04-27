import test from 'ava';
import slash from '.';

test('convert backwards-slash paths to forward slash paths', t => {
	t.is(slash('c:/aaaa\\bbbb'), 'c:/aaaa/bbbb');
	t.is(slash('c:\\aaaa\\bbbb'), 'c:/aaaa/bbbb');
});

test('not convert extended-length paths', t => {
	const path = '\\\\?\\c:\\aaaa\\bbbb';
	t.is(slash(path), path);
});

test('not convert paths with Unicode', t => {
	const path = 'c:\\aaaa\\bbbb\\★';
	t.is(slash(path), path);
});
