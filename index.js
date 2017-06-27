'use strict'

require('promise');

/**
 * Elegantly handles a unirest promise.
 * 
 * @param {Object} request The Unirest request object
 * @return {Promise} A promise that returns the request's response body
 * or is rejected with a request fulfillment error.
 */
module.exports.handle = function(request) {
    return new Promise(function(resolve, reject) {
        request
            .end(function(res) {
                if (res.error) reject(res.error);
                else resolve(res.body);
            });
    });
}