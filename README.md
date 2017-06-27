# Unirest Request Handler

A super tiny method for elegantly handling requests using the [Unirest](http://unirest.io/nodejs.html) library.


## Installation

```javascript
npm install unirest-request-handler
```

## Usage

Implementation is simple:

```javascript  
const unirest = require('unirest');
const requestHandler = require('unirest-request-handler');

requestHandler
    .handle(unirest.get('https://google.com/'))
    .then(function(html) {
    	// do stuff
    })
    .catch(function(err) {
    	// handle error
    });
```

## License
<a name='license'></a>

Copyright (c) 2017 Michael Scott.
Licensed under the MIT license.
