var Book = require("../src/model/book.js");

function loadAllBooks() {
    return [
        new Book('ITEM000001', '本', 8.00),
        new Book('ITEM000002', '本', 8.00),
        new Book('ITEM000003', '本', 8.00),
        new Book('ITEM000004', '本', 8.00),
        new Book('ITEM000005', '本', 8.00)
    ];
}
module.exports = loadAllBooks;
