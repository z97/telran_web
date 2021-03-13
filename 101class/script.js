console.log("Hello world!")
let x = 10;
console.log(x)
const pi = 3.14;
x = 42;
console.log(x);
x = true;
console.log(x);
let a;
console.log(a);
x = null;
console.log(x);
x = 10;
x += 5; //x = x + 5
console.log(x);
x = 7 % 2;
console.log(x);
let z = 'res' + ' = ' + x;
console.log(z)
z = 1 + 2 + '3' + 4;
z = 2 == 2;
console.log(z)
if( 3 == '3'){
    console.log('as true');
}else{
    console.log('as false');
}

z = 5;
switch (z){
    case '5':
        console.log(`String ${z}`);
        break;
    case 5:
        console.log('Number ' + z);
        break;
    default:
        console.log('Not a five');
}

for(let i = 1; i <= 5; i ++){
    console.log(i);
}

console.log(`===================`);
z = 10/5;
console.log(z);
z = 0/0;
console.log(z);
console.log(typeof(z));
x = `hello`;
console.log(typeof(x));
x = undefined;
console.log(typeof(x));
z = null;
console.log(typeof(z));

