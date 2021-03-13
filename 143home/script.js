let library = []; //Array of all books
//isbn;title;author;year
//First messege to user
let inputData = prompt('enter book data separate by ";"');

while (inputData) {
    const arr = inputData.split(';');
    const book = new Book(arr[0], arr[1], arr[2], arr[3]);
    if (findBook(library, book) < 0) {
        library.push(book);
    } else {
        alert(`Book with isbn =${book.isbn}, exists`);
    }
    inputData = prompt('enter book data separate by ";"');
}

//Last choice
const choice = confirm('Do you want show the books info');
if (choice) {
    //TODO display on page all books, age of oldest and newest books, average age of books
    printLI(library);
    printCalc(library);
} else {
    const isbn = prompt('Enter isbn');
    //TODO display on page book with current isbn
    let result = library.filter(obj => {
        return obj.isbn === isbn;
    });
    printLI(result);
}

//Functions===========================================
function printCalc(lib) {
    arr = Calculator(lib);
    document.getElementById("bottom").innerHTML = "newest book: " + arr[0] + " oldest book: " + arr[1] + " avg: " + arr[2];
}

function printLI(library) {
    document.getElementById("head").innerHTML = library;
}

//Find book in library by isbn
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
        return `
        ISBN=${this.isbn}, 
        Title=${this.title}, 
        Author=${this.author}, 
        Year=${this.year}`
    }
}

function Calculator(library) {
    let arr = [];
    let yearNow = new Date().getFullYear();
    let min = yearNow - library[0].year;
    let max = yearNow - library[0].year;
    let sum = 0;
    for (let i = 0; i < library.length; i++) {
        let age = yearNow - library[i].year;
        if (age < min) {
            min = age;
        }
        if (age > max) {
            max = age;
        }
        sum += age;
    }
    let avg = sum / library.length;
    arr.push(min, max, avg);
    return arr;
}


