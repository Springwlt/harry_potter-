var ShoppingCart = require("../../spec/fixtures.js");
var _ = require("../tools/lodash.js");

function ShoppingCart() {

}
ShoppingCart.getSpeciesGroup = function(barcode) {
    var speciesGroup = {};

    _(barcode).each(function(n, i) {
        speciesGroup[n] = speciesGroup[n] || 0;
        speciesGroup[n]++;
    });
    return speciesGroup;
}
ShoppingCart.Grouping = function(speciesGroup) {
    var length = 0;
    var groupStr = "group";
    var group = {};

    for (var key in speciesGroup) {
        var count = 0;
        length = speciesGroup[key];
        for (var i = 0; i < length; i++) {
            group[groupStr + count] = group[groupStr + count] || [];
            group[groupStr + count].push(key);
            count++;
        }
    }
    return group;
}
ShoppingCart.bestGgoup = function(group) {
    for (var key in group) {
        if (group[key].length === 5) {
            for (var k in group) {
                if (group[k].length === 3) {
                    for (var i = 0; i < 5; i++) {
                        var exist = false;
                        for (var j = 0; j < 3; j++) {
                            if (group[key][i] === group[k][j]) {
                                exist = true;
                            }
                        }
                        if (!exist) {
                            group[k].push(group[key][i]);
                            break;
                        }
                    }
                }
            }
        }
    }
    //console.log(group);
    return group;
}
ShoppingCart.totalPrice = function(group) {
    var sum = 0;
    for (var key in group) {
        if (group[key].length === 5) {
            sum += 8 * 0.25;
        }
        if (group[key].length === 4) {
            sum += 8 * 0.20;
        }
        if (group[key].length === 3) {
            sum += 8 * 0.10;
        }
        if (group[key].length === 2) {
            sum += 8 * 0.05;
        }
        if (group[key].length === 1) {
            sum += 8 * 1;
        }
    }
    return sum;
}
module.exports = ShoppingCart;
