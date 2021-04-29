//array
const arr1 = [2, 3, 5];
const arr2 = [7, 11, 13, 19];
const arr = [...arr1];
arr.unshift(...arr2);
console.log(arr);
let res = Math.max(...arr1, 23, 29,...arr2);
console.log(res);
//object
console.log('===============');
const john = {
    firstName: 'John',
    lastName: 'Smith',
}
const human = {hobby: 'chess'};
const cloneJohn = {...john, age: 21, firstName: 'Peter', ...human};
john.age = 28;
console.log(john);
console.log(cloneJohn);
console.log(john === cloneJohn);
//Legacy clone
const legacyClone = Object.assign({},john, human, {age: 23});
console.log(legacyClone);
console.log(john);