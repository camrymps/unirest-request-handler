'use strict'

require('promise');

/**
 * Elegantly handles a unirest promise.
 * 
 * @return {Promise} A promise that returns the request's response body
 * or is rejected with a request fulfillment error.
 */
module.exports = Object.prototype.handle = function() {
    let self = this;
    return new Promise(function(resolve, reject) {
        self
            .end(function(res) {
                if (res.error) reject(res.error);
                else resolve(res.body);
            });
    });
}