# deep-blue-string [![Build Status](https://travis-ci.org/dawsonbotsford/deep-blue-string.svg?branch=master)](https://travis-ci.org/dawsonbotsford/deep-blue-string) [![npm version](https://badge.fury.io/js/deep-blue-string.svg)](https://badge.fury.io/js/deep-blue-string)

> Apply function to strings deep within data types


<br>

## Install

```
npm install --save deep-blue-string
```


<br>

## Usage

```js
const deepBlueString = require('deep-blue-string');

deepBlueString(String.prototype.replace('fuck', 'f*$%'), 'fuck dang fuck');
//=> 'f*$% dang f*$%'
```


<br>

## API

### deepBlueString(function, target)

##### function

Type: `function`

##### target

Type: `string` || `Array`

Apply function to all strings in target. Deeply nested strings will be found and operated on.

<br>

### deepBlueString.secondThing(input, [options])

##### input

Type: `string`

secondThing does a specific thing to input

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


<br>
## License

MIT © [dawsonbotsford](http://dawsonbotsford.com)
