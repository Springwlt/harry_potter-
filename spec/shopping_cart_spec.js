'use strict';

var ShoppingCart = require('../src/model/shopping_cart.js');

describe('test shoppingCart get books', function() {
    it('', function() {

        var result = ShoppingCart();
        expect(result).toEqual("collection_b");
    });
});
