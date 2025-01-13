// 구조분해할당 : destructuring(de + structure + ing)
// 배열이나 객체의 속성
// 을 분해해서 값을 변수에 할당

// 1. 배열
let [value1, value2] = [1, "new"];
console.log('1', value1);
console.log('2', value2);

let arr = ["value1", "value2", "value3"];
let [a, b, c, d, e=5] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// 2. 객체
let user = {
    name: "nbc",
    age: 30
};

let {name: newName, age: newAge} = user;
console.log(newName);
console.log(newAge);

let {name, age, birthday} = user;
console.log(name);
console.log(age);
console.log(birthday);