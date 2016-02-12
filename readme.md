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

*Required*  
Type: Any  

##### function

*Required*  
Type: `function`

##### fnArgs

*Optional*  
Type: `string` || `array`  
Description: If the user inputted function takes arguments, supply them here. For multiple arguments (like `String.prototype.replace`, input them as an array).

#### Function overview

Apply function to all strings in `target`. Deeply nested strings will be found and operated on. No casting will be done on inputted `target`.

<br>

## Features

Supported `target` Data Types:
- [x] String
- [x] Array
- [ ] Objects
  - [ ] Object object
  - [ ] Strings as objects
  - [ ] Numbers as objects
  - [ ] Booleans as objects
  - [ ] Arrays as objects
  - [ ] Regex	as objects
  - [ ] Function as objects
  - [ ] Date objects
- [x] Number	(returned unmodified)
- [x] Boolean	(returned unmodified)
- [x] Undefined (returned unmodified)
- [x] Function (returned unmodified)
- [x] Symbol (returned unmodified)

<br>

## License

MIT © [dawsonbotsford](http://dawsonbotsford.com)
