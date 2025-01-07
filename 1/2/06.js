// 연산자 (+, -, *, /, %)
// 1. 더하기 연산자
console.log(1+1);
console.log(1 + "1");

// 2. 빼기 연산자
console.log(1 - "2");
console.log(1 - 2);

// 3. 곱하기 연산자
console.log("2" * 3);
console.log(2 * 3);

// 4. 나누기 연산자
console.log(4 / 2);
console.log("4" / 2);

// 5. 나누기 연산자 vs 나머지 연산자
console.log(5 / 2);
console.log(5 % 2);

// 6. 할당 연산자
// 6-1. 등호 연산자 (=)
let x = 10;

// 6-2. 더하기 등호 연산자(+=)
x += 5;
console.log(x);

// 6-3. 빼기 등호 연산자(-=)
x -= 5;
console.log(x);

// 6-4. 곱하기 등호 연산자(*=)
let a = 10;
a *= 2;
console.log(a);

// 7. 비교 연산자
// 7-1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환하는 연산자
console.log(2 === 2);
console.log("2" === 2);

// 7-2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환하는 연산자
console.log(2 !== 2);
console.log("2" !== 2);

// 7-3. 작다 연산자(<)
console.log(2 < 3);
console.log(2 <= 3);
console.log(3 <= 3);
console.log(4 <= 3);

// 8. 논리 연산자
// 8-1. 논리곱 연산자
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// 8-2. 논리합 연산자
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// 8-3. 논리부정 연산자
console.log(!true);
let b = true;
console.log(!b);

// 9. 삼항 연산자
// 조건에 따라 값을 선택한다
let z = 10;
let result = z > 5 ? "크다" : "작다";
console.log(result);

// 10. 타입연산자 (typeof)
console.log(typeof "5");