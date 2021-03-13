let num = 564563453;
let res = sumDigits(num);
console.log(`Sum Of Digits: ${res}`);
num = 12325;
res = luckyNumber(num);
console.log(res);

function sumDigits(num) {
    len = num.toString().length;
    let sum = 0;
    let digit = 0;
    let i = 0;
    while (i < len) {
        digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
        i++;
    }
    return sum;
}

function luckyNumber(num) {
    len = num.toString().length / 2;
    let sum = 0;
    let digit = 0;
    let i = 0;
    while (i < len) {
        digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
        digit = num % 10;
        sum -= digit;
        num = Math.floor(num / 10);
        i++;
    }
    return (sum === 0) ? `lucky number` : `not lucky number`;
}

