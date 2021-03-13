let library = [];
//isbn;title;author;year
let inputData = prompt('enter book data separate by ";"');
while (inputData) {
    const arr = inputData.split(';');
    const book = new Book(arr[0], arr[1], arr[2], arr[3]);
    if(findBook(library, book) < 0){
        library.push(book);
    }else{
        alert(`Book with isbn =${book.isbn}, exists`);
    }
    inputData = prompt('enter book data separate by ";"');
}
const choice = confirm('Do you want show the books info');

if(choice){
    //TODO display on page all books, age of oldest and newest books, average age of books
    fillHtml();

}else{
    const isbn = prompt('Enter isbn');
    //TODO display on page book with current isbn
}

function fillHtml(){
    for(let i = 0; i < library.length; i++){
        var para = document.createElement("tr");
        var node = document.createTextNode(fillRow());
        para.appendChild(node);
        const root = document.getElementById('table');
        root.appendChild(para);
    }
}

function fillRow(){
    for (let key in library){
        var para = document.createElement("td");
        var node = document.createTextNode(library[key]);
        para.appendChild(node);
        const root = document.getElementById('form');
        root.appendChild(para);
    }
}

function findBook(library, book){
    for(let i = 0; i < library.length; i++){
        if(library[i].isbn === book.isbn){
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
    this.toString = function (){
        return `
        ISBN=${this.isbn}, 
        Title=${this.title}, 
        Author=${this.author}, 
        Year=${this.year}`
    }
}

function Calculator(library){
    let arr = [];
    let yearNow = new Date().getFullYear();
    let min = yearNow - library[1].year;
    let max = yearNow - library[1].year;
    let sum = 0;
    for(let i = 0; i < library.length; i++){
        let age = yearNow - library[i].year;
        if(age > min){
            min = age;
        }
        if(age > max){
            max = age;
        }
        sum += age;
    }
    let avg = sum / library.length+1;
    return arr.push(min, max, avg);
}


