const greeting = function (name){
    console.log(`Hello ${name}`);
}
const fn = greeting;

fn('John');
greeting('Peter');


let res = pow2(5);
console.log(res);
const fn1 = pow2;
res = fn1(10);
console.log(res);
res = uniFunc(5, factorial, pow2);
console.log(res);

function uniFunc(x, fn1, fn2){
    if(typeof(fn1) !== 'function' || typeof(fn2) !== 'function'){
        return 'Error';
    }
    if(x >= 0){
        return fn1(x);
    }else{
        return fn2(x);
    }
}

function pow2(x){
    return x * x;
}

function factorial(n){
    let res = 1;
    for(let i = 1; i <= n; i++){
        res *= i;
    }
    return res;
}

