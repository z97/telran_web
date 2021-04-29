const john = {
    firstName: 'John',
    lastName: 'Smith',
    age: 28,
    gender: 'male',
    fullName: function () {
        return `Hello!`
    }
}

const johnJSON = JSON.stringify(john);
console.log(johnJSON);
console.log(typeof johnJSON);
const johnRestore = JSON.parse(johnJSON);
console.log(johnRestore);
console.log(typeof(johnRestore));