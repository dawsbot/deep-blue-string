# deep-blue-string [![Build Status](https://travis-ci.org/dawsonbotsford/deep-blue-string.svg?branch=master)](https://travis-ci.org/dawsonbotsford/deep-blue-string) [![npm version](https://badge.fury.io/js/deep-blue-string.svg)](https://badge.fury.io/js/deep-blue-string)

> Apply prototypes to strings deep in data types


<br>

## Install

```
npm install --save deep-blue-string
```


<br>

## Usage

```js
const dbs = require('deep-blue-string');

//Censor data for dangerous sql strings
dbs('DROP TABLE admin', String.prototype.replace, ['DROP TABLE', 'not in my house']);
//=> 'not in my house admin'




```

<br>

## API

### dbs(target, function, [fnArgs])

##### target

Type: Any

##### function

Type: `function`

##### fnArgs

Type: `string` || `array`<br>
fnArgs description: If the user inputted function takes arguments, supply them here.

#### Function overview
Apply function to all strings in `target`. Deeply nested strings will be found and operated on. No casting will be done on inputted `target`.

<br>

## Features
Supported `target` Data Types:
- [ ] Number	("number")
- [x] String	("string")
- [ ] Boolean	("boolean")
- [ ] Undefined	("undefined")
- [ ] Null	("object")
- [ ] Symbol ("symbol")
- [ ] Function ("function")

<br>
Supported `function` Types:
- [x] String prototype methods
- [ ] console.log

<br>

## License

MIT © [dawsonbotsford](http://dawsonbotsford.com)
