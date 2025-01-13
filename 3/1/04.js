// 얕은 복사 적용
var copyObject = function (target) {
    var result = {};

    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
}

var user = {
    name : "sion",
    gender : "male"
};

var user2 = copyObject(user);
user2.name = "simon";

if (user !== user2) {
    console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);