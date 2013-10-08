# slash [![Build Status](https://secure.travis-ci.org/sindresorhus/slash.png?branch=master)](http://travis-ci.org/sindresorhus/slash)

Convert Windows backslash paths to slash paths: `foo\\bar` ➔ `foo/bar`

[Forward-slash paths can be used in Windows](http://superuser.com/a/176395/6877) as long as they're not extended-length paths and don't contain any non-ascii characters.


## Install

Download the library [manually](https://github.com/sindresorhus/slash/releases) or with a package-manager.

#### [npm](https://npmjs.org/package/slash)

```
npm install --save slash
```

#### [Bower](http://bower.io)

```
bower install --save slash
```

#### [Component](https://github.com/component/component)

```
component install sindresorhus/slash
```


## Example

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

MIT © [Sindre Sorhus](http://sindresorhus.com)
