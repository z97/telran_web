const arr = [9, 2, 4, 1, 5, 2, 9, 1, 7, 0];
printArray(arr);
bublesort(arr);
printArray(arr); //[0, 1, 1, 2, 2, 4, 5, 7, 9, 9]
const persons =
    [{name: 'John', age: 27},
        {name: 'Peter', age: 25},
        {name: 'Tigran', age: 26},
        {name: 'Mary', age: 18}];

function bublesort(arr) {
    //TODO sort array of numbers
    let len = arr.length;
    let i = 0;
    while (i < len) {
        let j = 0;
        while (j < len) {
            if (arr[j + 1] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            j++;
        }
        i++;
    }
    return arr;
}

function bubleSortAdv(arr, comparator = ((a, b) => a - b)) {
    //sort array of any elements by comparator
    //comparator(a, b) if a > b return positive number
    // if a < b return negative number
    // if a === b return 0
    //comparator = comparator || ((a, b) => a - b);
    let len = arr.length - 1;
    let i = 0;
    while (i < len) {
        let j = 0;
        while (j < len) {
            if (comparator(arr[j], arr[j + 1]) < 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            j++;
        }
        i++;
    }
    return arr;
}

const comparator = (p1, p2) => {
    return p1.age - p2.age;
}

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('========================');
}

printArray(bubleSortAdv(persons, comparator));
