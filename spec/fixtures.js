var Book = require("../src/model/book.js");

function loadAllBooks() {
    return [
        new Book('1st', '本', 8.00),
        new Book('2nd', '本', 8.00),
        new Book('3rd', '本', 8.00),
        new Book('4th', '本', 8.00),
        new Book('5th', '本', 8.00)
    ];
}
module.exports = loadAllBooks;
