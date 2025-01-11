// 객체
// key - value
// 하나의 변수에 여러 개의 값을 넣을 수 있다

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("성춘향", 20, "여자");
let person2 = new Person("이몽룡", 20, "남자");

// 2. 접근하는 방법
console.log(person1.name);

// 3. 객체 메소드 (객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.key() : key를 가져오는 메소드
let person3 = {
    name : "심청",
    age : 15,
    gender : "여성"
}

let keys = Object.keys(person3);
console.log("keys => ", keys);

// 3-2. values
let values = Object.values(person3);
console.log("values => ", values);

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열 (2차원 배열)
let entries = Object.entries(person3);
console.log("entries => ", entries);

// 3-4. assign
// 객체 복사
let newPerson1 = {};
Object.assign(newPerson1, person3);
console.log("newPerson1 => ", newPerson1);

let newPerson2 = {};
Object.assign(newPerson2, person3, {age : 17});
console.log("newPerson2 => ", newPerson2);

// 3-5. 객체 비교
// 객체는 메모리에 저장할 때 별도의 공간에 저장
// newPerson3 <- 별도 공간에 대한 주소
let newPerson3 = {};
Object.assign(newPerson3, person3);
console.log("newPerson3 => ", newPerson3);
console.log(newPerson1 === newPerson3); // newPerson1과 newPerson3의 주소는 다름

// 문자열화
console.log(JSON.stringify(newPerson1) === JSON.stringify(newPerson3));

// 3-6. 객체 병합
let person4 = {
    name : "심청",
    age: 15
};

let person5 = {
    gender: "여자"
};

// ... : spread operator
// ... === 중괄호를 해체시켜라
let perfectPerson = {...person4, ...person5};
console.log(perfectPerson);
