# slash [![Build Status](https://secure.travis-ci.org/sindresorhus/slash.png?branch=master)](http://travis-ci.org/sindresorhus/slash)

Convert Windows backslash paths to slash paths.

[Forward-slash paths can be used in Windows](http://superuser.com/a/176395/6877) as long as it's not an extended-length path and it doesn't contain Unicode.


## Install

Install with [npm](https://npmjs.org): `npm install --save slash`


## Example

```js
var path = require('path');
var slash = require('slash');

var str = path.join('foo', 'bar');
console.log(str);
//=> foo\\bar

if (process.platform === 'win32') {
	str = slash(str);
	console.log(str);
	//=> foo/bar
}
```


## API

### slash(path)

Type: `String`

Accepts a Windows backslash path and returns a slash path.


## License

MIT License • © [Sindre Sorhus](http://sindresorhus.com)
