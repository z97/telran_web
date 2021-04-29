let group = {
    title: 'Java 41',
    students: ['Alla', 'Tanya', 'Viktoriya', 'Lubov', 'Mariya', 'Olya'],
    showList: function (){
        const show = function (name){
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

group.showList();
const newGroup = group;
group = null;
console.log('================')
newGroup.showList();

//================Answer1================

let group2 = {
    title: 'Java 41',
    students: ['Alla', 'Tanya', 'Viktoriya', 'Lubov', 'Mariya', 'Olya'],
    showList (){
        const show = (name) => {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

group2.showList();
const newGroup2 = group2;
group2 = null;
console.log('================')
newGroup2.showList();

//==================Answer2=================

let group3 = {

    title: 'Java 41',
    students: ['Alla', 'Tanya', 'Viktoriya', 'Lubov', 'Mariya', 'Olya'],
    showList: function (){
        const show = function (name){
            console.log(`${this.title}: ${name}`);
        }.bind(this)
        this.students.forEach(show);
    }
};

group3.showList();
const newGroup3 = group3;
group3 = null;
console.log('================')
newGroup3.showList();

//==============Answer 3=============
let group4 = {

    title: 'Java 41',
    students: ['Alla', 'Tanya', 'Viktoriya', 'Lubov', 'Mariya', 'Olya'],
    showList: function (){
        let that = this;
        const show = function (name){
            console.log(`${that.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

group4.showList();
const newGroup4 = group4;
group4 = null;
console.log('================')
newGroup4.showList();

//===============Ab

let group5 = {
    title: 'Java 41',
    students: ['Alla', 'Tanya', 'Viktoriya', 'Lubov', 'Mariya', 'Olya'],
    showList: function (){
        const show = function (name){
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show.bind(this));
    }
}

group5.showList();
const newGroup5 = group5;
group5 = null;
console.log('================')
newGroup5.showList();

//================

let group6 = {
    title: 'Java 41',
    students: ['Alla', 'Tanya', 'Viktoriya', 'Lubov', 'Mariya', 'Olya'],
    showList: function (){
        const title = this.title
        const show = function (name){
            console.log(`${title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

group6.showList();
const newGroup6 = group6;
group6 = null;
console.log('================')
newGroup.showList();

//=========================
window.title = 'Java 41'
let group7 = {
    title: 'Java 41',
    students: ['Alla', 'Tanya', 'Viktoriya', 'Lubov', 'Mariya', 'Olya'],
    showList: function (){
        const show = function (name){
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

window.title = group7.title
group7.showList();
const newGroup7 = group7;
group7 = null;
console.log('================')
newGroup7.showList();