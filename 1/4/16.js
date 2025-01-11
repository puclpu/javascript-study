// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
let number = new Array(5);

console.log(fruits.length);
console.log(number.length);

// 2. 요소 접근
console.log(fruits[0]);

// 3. 배열 메소드
// 3-1. push
console.log("1 =>", fruits);

fruits.push("키위");
console.log("push =>", fruits);

// 3-2. pop
// 마지막 요소 삭제

fruits.pop();
console.log("pop =>", fruits);

// 3-3. shift
// 첫번째 요소 삭제
fruits.shift();
console.log("shift =>", fruits);

// 3-4. unshift
// 첫번째 요소 추가
fruits.unshift("사과");
console.log("unshift =>", fruits);

// 3-5. splice
// splice(시작 index, 삭제할 개수, 추가할 데이터)
fruits.splice(1, 1, "포도");
console.log("splice =>", fruits);

// 3-6. slice
// slice(start index, end index)
// start index ~ end index-1 까지의 데이터를 분리
let slicedFruits= fruits.slice(0, 2);
console.log("slice =>", slicedFruits);

// 3-7. forEach
let numbers = [1, 2, 3, 4, 5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function(item){
    console.log('item =>' + item);
});

// 3-8. map : 항상 원본 배열 길이만큼이 return 된다.
// return 필수 === return값을 받는 newNumbers 필요
let mappedNumbers = numbers.map(function(item){
    return item * 2;
});
console.log(mappedNumbers);

// 3-9. filter : 조건에 해당하는 길이만큼 return 된다.
// return 필수
let filteredNumbers = numbers.filter(function(item){
    return item < 5;
});
console.log(filteredNumbers);

// 3-10. find : 조건에 해당하는 데이터 중 첫번째를 return
let foundNumber = numbers.find(function(item){
    return item > 3;
});
console.log(foundNumber);