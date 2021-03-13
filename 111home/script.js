const arr = [2, 'r', 'u', 3, '6', 8, 99, 'abc'];
console.log(search(arr, 6));
console.log(search(arr, 8));
console.log(reverseArray(arr));

function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

function reverseArray(arr) {
    let len = arr.length;
    let end = len - 1;
    for (let i = 0; i < len/2; i++) {
        let temp = arr[end];
        arr[end] = arr[i];
        arr[i] = temp;
        end--;
    }
    return arr;
}