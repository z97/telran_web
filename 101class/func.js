let age = 17;
let res = checkAge(age);
console.log(`vol = ${res}`);

function checkAge(age){
    if (age < 18){
        return 1.5;
    }
    if(age >= 18 && age < 70){
        return 42;
    }
}