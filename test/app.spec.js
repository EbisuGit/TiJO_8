'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function () {
    it('should return number with reversed digits', function () {
        expect(app.reverseNumber(135)).to.eql(531);
    });
});

describe('returnOnlyLetter', function () {
    it('should return string with non-letters removed', function () {
        expect(app.returnOnlyLetter('a1b2c3')).to.eql('abc');
    });
});

describe('isEmail', function () {
    it('should return if string matches email pattern', function () {
        expect(app.isEmail("hello@world.com")).to.eql(true);
    })
});
