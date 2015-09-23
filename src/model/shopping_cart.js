function ShoppingCart() {

}
ShoppingCart.getSpeciesGroup = function(barcodeArray) {
    var speciesGroup = {};

    barcodeArray.forEach(function(barcode,j){
        speciesGroup[barcode] = speciesGroup[barcode] || 0;
        speciesGroup[barcode]++;
    });

    return speciesGroup;
}
ShoppingCart.Grouping = function(speciesGroup) {
    var groupStr = "group";
    var group = {};

    for (var key in speciesGroup) {
        var count = 0;

        for (var i = 0; i < speciesGroup[key]; i++) {
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
                            group[key].splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
    }
    return group;
}
ShoppingCart.totalPrice = function(group) {
    var sum = 0;
    var discount = [0, 0.05, 0.10, 0.20, 0.25];

    for (var key in group) {
        for (var i = 0; i < discount.length; i++) {
            if (group[key].length === i + 1) {
                sum += (i + 1) * 8 * (1 - discount[i])
            }
        }
    }

    return sum;
}
module.exports = ShoppingCart;
