// user 객체를 생성
var user = {
    name: "sion",
    gender: "male"
};

// 이름을 변경하는 함수, 'changeName'을 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티(속성)에 접근해서 이름을 변경 -> 가변
var changeName = function (user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

// 변경한 user 정보를 user2 변수에 할당
// 가변이기 때문에 user1도 영향을 받게 됨
var user2 = changeName(user, 'simon');

// 결국 아래 로직은 skip 됨
if (user !== user2) {
    console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);