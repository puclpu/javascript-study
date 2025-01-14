function muliplyBy(num) {
    return function (x) {
        return x * num;
    };
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = muliplyBy(2);
const multiplyByThree = muliplyBy(3);

console.log(multiplyByTwo(10));
console.log(multiplyByThree(10));

const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log(`FINAL => ${result}`);