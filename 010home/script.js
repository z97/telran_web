let num = 564563453;
let res = sumDigits(num);
console.log(`Sum Of Digits: ${res}`);
num = 6610;
res = luckyNumber(num);
console.log(res);

function sumDigits(num) {
    len = num.toString().length;
    let sum = 0;
    let digit = 0;
    for (let i = 0; i < len; i++) {
        digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

function luckyNumber(num) {
    len = num.toString().length / 2;
    let sum = 0;
    let digit = 0;
    for (let i = 0; i < len; i++) {
        digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
        digit = num % 10;
        sum -= digit;
        num = Math.floor(num / 10);
    }
    return (sum === 0) ? `lucky number` : `not lucky number`;
}