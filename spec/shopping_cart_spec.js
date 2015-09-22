'use strict';

var Settlement = require('../src/main.js');
describe('test shoppingCart get books', function() {
    it('should be origin price for 1 book', function() {
        var result = Settlement(["1st"]);
        expect(result).toEqual(8);
    });
    it('should be 5% discount price for just 2 different books', function() {
        var result = Settlement(["1st", "2th"]);
        expect(result).toEqual(2 * 8 * (1 - 0.05));
    });
    it('should be origin price for 2 same books', function() {
        var result = Settlement(["2th", "2th"]);
        expect(result).toEqual(2 * 8);
    });
    it('should be origin price for 3 different books', function() {
        var result = Settlement(["1st", "2th", "3rd"]);
        expect(result).toEqual(3 * 8 * (1 - 0.10));
    });
    it('should be origin price for 4 different books', function() {
        var result = Settlement(["1st", "2th", "3rd", "4th"]);
        expect(result).toEqual(4 * 8 * (1 - 0.20));
    });
    it('should be 20% discount price for 8 books', function() {
        var result = Settlement(["1st", "2th", "3rd", "4th", "5th", "1st", "2th", "3rd"]);
        expect(result).toEqual(8 * 8 * (1 - 0.20));
    });

});
