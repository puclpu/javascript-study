// 얕은 복사
var copyObject = function (target) {
    var result = {};

    // for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근 가능
    // 하드코딩을 하지 않아도 된다
    // 이 copyObject로 복사한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면 ok
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
}