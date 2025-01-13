// user 객체를 생성
var user = {
    name: "sion",
    gender: "male"
};

// 이름을 변경하는 함수 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티에 접근하는 것이 아니라, 새로운 객체를 반환 -> 불변
var changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender
    };
};

// 변경한 user 정보를 user2 변수에 할당
// 불변이기 때문에 user에는 영향 x
var user2 = changeName(user, "simon");

// 아래 로직 수행
if (user != user2) {
    console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);