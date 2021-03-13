let x = '-3';
console.log(typeof x);
let res = true + 2 + +x + 4;
console.log(res);
console.log('3' > true);
let z = 42;
if(z){
    console.log('TRUE');
}else{
    console.log('FALSE')
}
let y = 42;
console.log(typeof y);

let a ;
printName(a);
function printName(name){
    name = name || 'Unknown';
    console.log(name);
}