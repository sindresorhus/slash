# slash [![Build Status](https://secure.travis-ci.org/sindresorhus/slash.png?branch=master)](http://travis-ci.org/sindresorhus/slash)

Convert Windows backslash paths to slash paths: `foo\\bar` ➔ `foo/bar`

[Forward-slash paths can be used in Windows](http://superuser.com/a/176395/6877) as long as they're not extended-length paths and don't contain any non-ascii characters.


## Install

Install with [npm](https://npmjs.org): `npm install --save slash`


## Example

```js
var path = require('path');
var slash = require('slash');

var str = path.join('foo', 'bar');
console.log(str);
// Unix    => foo/bar
// Windows => foo\\bar

if (process.platform === 'win32') {
  str = slash(str);
}

console.log(str);
// Unix    => foo/bar
// Windows => foo/bar
```


## API

### slash(path)

Type: `String`

Accepts a Windows backslash path and returns a slash path.


## License

MIT License • © [Sindre Sorhus](http://sindresorhus.com)
