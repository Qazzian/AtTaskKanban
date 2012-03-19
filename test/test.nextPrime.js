var assert = require('assert'),
	nextPrime = require('./../lib/primes.js').nextPrime,
	asyncPrime = require('./../lib/primes.js').asynchPrime;

suite('nextPrime', function(){
	test('nextPrime should return the next prime number', function(){
		assert.equal(11, nextPrime(7));
	});

	test('zero and one are not prime numbers', function() {
		assert.equal(2, nextPrime(0));
		assert.equal(2, nextPrime(1));
	});
});
