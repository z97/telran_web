const library = [];
//isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');
while (inputData) {
    const arr = inputData.split(';');
    const book = new Book(arr[0], arr[1], arr[2], arr[3]);
    if (findBook(library, book) < 0) {
        library.push(book);
    } else {
        alert(`Book with isbn=${book.isbn}, exists`);
    }

    inputData = prompt('Enter book data separate by ";"');
}

printArray(library);

function findBook(library, book) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === book.isbn) {
            return i;
        }
    }
    return -1;
}

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toString());
    }
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title},
         Author: ${this.author}, Year of publishing: ${this.year}`
    }
}
