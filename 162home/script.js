buttonAddBook.addEventListener('click', fAddBook);
buttonStat.addEventListener('click', printCalc);

const libraryBook = [];

function findBook(library, book) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === book.isbn) {
            return i;
        }
    }
    return -1;
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

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toString());
    }
}

function fAddBook() {
    let text = inputIsbn.value.trim() + ';' + inputTitle.value.trim() + ';' + inputAuthor.value.trim() + ';' + inputYear.value.trim();
    const arr = text.split(';');
    const book = new Book(arr[0], arr[1], arr[2], arr[3]);
    if (inputIsbn.value !== '' && inputTitle.value !== '' && inputAuthor.value !== '' && inputYear.value !== '') {
        const textNode = document.createTextNode(text);
        const liElem = document.createElement('li');
        //============================
        if (findBook(libraryBook, book) < 0) {
            liElem.append(book);
            uList.appendChild(liElem);
        } else {
            alert(`Book with isbn=${book.isbn}, exists`);
            $('.alert').alert()
        }
        if (findBook(libraryBook, book) < 0) {
            libraryBook.push(book);
        }
    }
    inputIsbn.value = '';
    inputTitle.value = '';
    inputAuthor.value = '';
    inputYear.value = '';
}

function Calculator() {
    let arr = [];
    let yearNow = new Date().getFullYear();
    console.log(libraryBook);
    let min = yearNow - libraryBook[0].year;
    let max = yearNow - libraryBook[0].year;
    let sum = 0;
    for (let i = 0; i < libraryBook.length; i++) {
        let age = yearNow - libraryBook[i].year;
        if (age < min) {
            min = age;
        }
        if (age > max) {
            max = age;
        }
        sum += age;
    }
    let avg = sum / libraryBook.length;
    arr.push(min, max, avg);
    return arr;
}

function printCalc(libraryBook) {
    let arr = Calculator(libraryBook);
    document.getElementById("stat").innerHTML = "newest book: " + arr[0] + " oldest book: " + arr[1] + " avg: " + arr[2];
}



