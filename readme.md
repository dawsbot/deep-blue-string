# deep-blue-string [![Build Status](https://travis-ci.org/dawsonbotsford/deep-blue-string.svg?branch=master)](https://travis-ci.org/dawsonbotsford/deep-blue-string) [![npm version](https://badge.fury.io/js/deep-blue-string.svg)](https://badge.fury.io/js/deep-blue-string)

> Apply prototype funtions to strings deep in data types

<br>

![logo](logo.jpg)

<br>

## Install

```
npm install --save deep-blue-string
```


<br>

## Usage

```js
const dbs = require('deep-blue-string');

//Sanitize any data type
dbs({userInput: 'DROP TABLE admin'}, String.prototype.replace, ['DROP TABLE', 'not in my house']);
//=> {userInput: 'not in my house admin'}
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
* String
* Array
* Objects
  * Object object
  * Strings as objects
  * Arrays as objects
  * Numbers as objects (returned unmodified)
  * Booleans as objects (returned unmodified)
  * Regex	as objects (returned unmodified)
  * Function as objects (returned unmodified)
  * Date objects   (returned unmodified)
* Number	(returned unmodified)
* Boolean	(returned unmodified)
* Undefined (returned unmodified)
* Function (returned unmodified)
* Symbol (returned unmodified)

<br>

## Related
* [object-types](https://github.com/dawsonbotsford/object-types)
* [hugg](https://github.com/dawsonbotsford/hugg)

<br>

## License

MIT © [dawsonbotsford](http://dawsonbotsford.com)
