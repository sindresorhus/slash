# slash [![Build Status](https://travis-ci.org/sindresorhus/slash.svg?branch=master)](https://travis-ci.org/sindresorhus/slash)

> Convert Windows backslash paths to slash paths: `foo\\bar` ➔ `foo/bar`

[Forward-slash paths can be used in Windows](http://superuser.com/a/176395/6877) as long as they're not extended-length paths and don't contain any non-ascii characters.

This was created since the `path` methods in Node outputs `\\` paths on Windows.


## Install

Download the library [manually](https://github.com/sindresorhus/slash/releases) or with a package-manager.

```bash
$ npm install --save slash
```

```bash
$ bower install --save win-slash
```

```bash
$ component install sindresorhus/slash
```


## Usage

Using Node.js:

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

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
