'use strict';

var talk = require('../talk');
var expect = require('chai').expect;

describe('talk', function(){
	it('should return a famous quote from bruce lee', function(){
		expect(talk()).to.eql('The key to immortality is to live a life worth remembering');
	})
})

