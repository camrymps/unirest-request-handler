'use strict'

const unirest = require('unirest');
require('../index'); // request handler

describe('#handle()', function() {
    it('should resolve the request', function() {
        return unirest
            .get('https://google.com/')
            .handle();
    });
});

describe('#handle()', function() {
    it('should reject the request', function(done) {
        unirest
            .get('https://google.com/random/')
            .handle()
            .then(function(resolved) {
                done('Request was not succesfully rejected.');
            }, function(rejected) {
                done();
            });
    });
});