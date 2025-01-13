const strings = ["sun", "bed", "car"];
const n = 1;

function sort(arr, n) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][n] + arr[i];
    }

    arr.sort();

    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].substr(1);
    }

    return arr;
}

console.log(sort(strings, n));