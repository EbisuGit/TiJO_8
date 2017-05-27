'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function () {
    it('should return 521', function () {
        expect(app.reverseNumber(135)).to.eql(531);
    });
    it('should return 54321', function () {
        expect(app.reverseNumber(12345)).to.not.eql(54329);
    });
    it('should return false', function () {
        expect(app.reverseNumber(NaN)).to.eql(false);
    });
});

describe('returnOnlyLetter', function () {
    it('should return abc', function () {
        expect(app.returnOnlyLetter('a1b2c3')).to.eql('abc');
    });
    it('should should return brkedbr', function () {
        expect(app.returnOnlyLetter('@br@ked@br@')).to.eql('brkedbr');
    });
    it('should should return false', function () {
        expect(app.returnOnlyLetter(123)).to.eql(false);
    });
});

describe('isEmail', function () {
    it('should return if string matches email pattern', function () {
        expect(app.isEmail("hello@world.com")).to.eql(true);
    })
    it('should return if string matches email pattern', function () {
        expect(app.isEmail("@")).to.eql(false);
    })
});
