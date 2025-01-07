// 화살표 함수
// ES6 신 문법

function add (x, y) {
    return x + y;
}

// 1-1. 기본적인 화살표 함수
let arrFunc01 = (x, y) => {
    return x + y;
}

// 1-2. 한 줄로
let arrowFunc02 = (x, y) => x + y; // 내부 로직이 한 줄일 때 가능

// 매개변수가 하나일 때는 괄호 생략 가능
let arrowFunc03 = x => x;