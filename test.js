/*global describe */
'use strict';
var assert = require('assert');
var slash = require('./slash');

describe('slash()', function () {
	it('should convert backwards-slash paths to forward slash paths', function () {
		assert.equal(slash('c:/aaaa\\bbbb'), 'c:/aaaa/bbbb');
		assert.equal(slash('c:\\aaaa\\bbbb'), 'c:/aaaa/bbbb');
	});

	it('should not convert extended-length paths', function () {
		var path = '\\\\?\\c:\\aaaa\\bbbb';
		assert.equal(slash(path), path);
	});

	it('should not convert paths with Unicode', function () {
		var path = 'c:\\aaaa\\bbbb\\★';
		assert.equal(slash(path), path);
	});
});
