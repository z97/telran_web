const john = {
    firstName: 'John',
    lastName: 'Smith',
    age: 28,
    gender: 'male',
    fullName: function () {
        return `Hello!`
    }
}

const keys = Object.keys(john);
console.log(keys);
console.log('======================');
const val = Object.values(john);
console.log(val);
console.log('======================');
const entries = Object.entries(john);
console.log(entries);
console.log('======================');
entries
    .filter(item => typeof(item[1] !== 'function')
    .forEach(item => console.log(`${item[0]} -> ${item[1]}`);
console.log(entries);