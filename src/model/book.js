var loadAllBooks = require("../../spec/fixtures.js");
function Book(barcode, unit, price) {
    this.barcode = barcode;
    this.unit = unit;
    this.price = price || 0.00;
}
module.exports = Book;
