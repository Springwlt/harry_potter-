var ShoppingCart = require("../src/model/shopping_cart.js");

function Settlement(barcodes) {
    var group = ShoppingCart.getSpeciesGroup(barcodes);
    var bestGgoup = ShoppingCart.Grouping(group);
    var price = ShoppingCart.bestGgoup(bestGgoup);
    return ShoppingCart.totalPrice(price);
}
module.exports = Settlement;
