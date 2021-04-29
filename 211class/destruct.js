const john = {
    firstName: 'John',
    lastName: 'Smith',
    age: 28,
    gender: 'male',
    fullName: function (){
        return `Hello!`
    }
}

const {firstName, lastName, ...obj} = john;
console.log(firstName);
console.log(lastName);
console.log(obj);