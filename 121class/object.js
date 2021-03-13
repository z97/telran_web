const john = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(john.firstName);
console.log(john.lastName);
console.log(john);
console.log(john.fullName());
john.firstName = 'Jackson';
console.log(john.fullName())
console.log(john.id);
john.id = 1000;
console.log(john['id']);
let key = 'age';
console.log(john[key]);

console.log('===================');
const arr = ['one', 'two', 'three'];
console.log(arr[1]);
let i = 1;
console.log(arr[i]);

console.log('==============================');
printObject(john);
delete john.age;
printObject(john);

function printObject(obj) {
    for (let key in obj) {
        console.log(key);
    }
    console.log('===========================')
}



function printArray(){
    for(let i= 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log('========================');
}