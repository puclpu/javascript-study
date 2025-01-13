// 깊은 복사 === 재귀적 수행
// 얕은 복사는 중첩된 객체에서 완전히 복사할 수 없다
// 깊은 복사를 통해 근본 원인 해결

var copyObjectDeep = function(target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
}

var obj = {
    a : 1,
    b : {
        c : null,
        d : [1, 2],
    }
};

var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);