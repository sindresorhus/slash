import test from 'ava';
import m from '.';

test('convert backwards-slash paths to forward slash paths', t => {
	t.is(m('c:/aaaa\\bbbb'), 'c:/aaaa/bbbb');
	t.is(m('c:\\aaaa\\bbbb'), 'c:/aaaa/bbbb');
});

test('not convert extended-length paths', t => {
	const path = '\\\\?\\c:\\aaaa\\bbbb';
	t.is(m(path), path);
});

test('not convert paths with Unicode', t => {
	const path = 'c:\\aaaa\\bbbb\\★';
	t.is(m(path), path);
});
