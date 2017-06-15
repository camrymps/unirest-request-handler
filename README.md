# Unirest Request Handler

A super tiny protototype method for elegantly handling requests using the [Unirest](http://unirest.io/nodejs.html) library.


## Installation

```javascript
npm install unirest-request-handler
```

## Usage

Implementation is simple:

```javascript       
unirest
    .get('https://google.com/')
    .handle()
    .then(function(html) {
    	// do stuff
    })
    .catch(function(err) {
    	// handle error
    });
```

## License
<a name='license'></a>

Copyright (c) 2016 Michael Scott.
Licensed under the MIT license.
