var ShoppingCart = require("../src/model/shopping_cart.js");
var Promotion = require("../src/model/promotion.js");

function Settlement() {
    var group = ShoppingCart.getSpeciesGroup(['ITEM000002','ITEM000001','ITEM000003','ITEM000004','ITEM000005','ITEM000001','ITEM000002','ITEM000003']);
    var bestGgoup = ShoppingCart.Grouping(group);
    var price = ShoppingCart.bestGgoup(bestGgoup);
    return ShoppingCart.totalPrice(price);
}
module.exports = Settlement;
