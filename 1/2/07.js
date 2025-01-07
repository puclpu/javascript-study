// 함수 = function(기능)
// input, output

// 1. 함수 선언문
// function 함수명 (매개변수) {
    // 함수 내부에서 실행할 로직
// }

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add (x, y) {
    return x + y;
}

// 2. 함수 표현식
let add2 = function (x, y) {
    return x + y;
};

// 함수를 호출한다(= 사용한다)
// 함수명() -> add(입력값)
console.log(add(2, 3));
console.log(add2(2,3));