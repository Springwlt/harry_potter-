'use strict';

var ShoppingCart = require('../src/model/shopping_cart.js');

describe('test shoppingCart get books', function () {
  it('选出给定区间中所有的偶数', function() {

    var result = ShoppingCart();
    expect(result).toEqual("collection_b");
  });
});
