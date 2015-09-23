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
    for (var key in group) {
        if (group[key].length === 5) {
            sum += 5 * 8 * (1 - 0.25);
        } else if (group[key].length === 4) {
            sum += 4 * 8 * (1 - 0.20);
        } else if (group[key].length === 3) {
            sum += 3 * 8 * (1 - 0.10);
        } else if (group[key].length === 2) {
            sum += 2 * 8 * (1 - 0.05);
        } else if (group[key].length === 1) {
            sum += 8 * 1;
        }
    }
    return sum;
}
module.exports = ShoppingCart;
