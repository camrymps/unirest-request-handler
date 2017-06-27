'use strict'

const unirest = require('unirest')
const requestHandler = require('../index');

describe('#handle()', function() {
    it('should resolve the request', function() {
        return requestHandler
            .handle(unirest.get('https://google.com/'));
    });
});

describe('#handle()', function() {
    it('should reject the request', function(done) {
        requestHandler
            .handle(unirest.get('https://google.com/random/'))
            .then(function(resolved) {
                done('Expected rejection but instead was resolved.');
            })
            .catch(function(rejected) {
                done();
            })
            /*unirest
                .get('https://google.com/random/')
                .handle()
                .then(function(resolved) {
                    done('Request was not succesfully rejected.');
                }, function(rejected) {
                    done();
                });*/
    });
});