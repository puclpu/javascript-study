// 조건부 실행
let x = 10;

// if (x > 0) {
//     console.log("x는 양수입니다.");
// }

x > 0 && console.log("x는 양수입니다.");

// 삼항 연산자와 단축평가
let y; // y는 undefined
let z = y || 20; // y가 undefined이면 20을 저장

console.log(z);