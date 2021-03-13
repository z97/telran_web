const arr = [1, 2, 3, 'four', 'five', true];
console.log(arr[3]);
console.log(arr.length);
arr[0] = 100500;
console.log(arr[0]);
console.log(arr);
arr[arr.length] = 42;
console.log(arr[arr.length-1]);
console.log(arr);
printArray(arr);
arr.length = 3;
printArray(arr);
const arr1 = []; //new array
function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log('==================');
}

//hw
function search(arr, value){

}

function reverseArray(arr){

}

const arr = [2, 3, 5, 7, 11, 7, 5, 19];
let res = search(arr, 7);
console.log(res); //3
res = search(arr, 13); //-1
