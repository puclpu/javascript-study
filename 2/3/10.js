// Set
// - 고유한 값을 저장하는 자료구조
// - 중복 제거
// - 값만 저장
// 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

const mySet = new Set();
mySet.add('value1');
mySet.add('value2');
mySet.add('value2');

console.log(mySet.size);
console.log(mySet.has("value1"));
console.log(mySet.has("value2"));
console.log(mySet.has("value3"));

for(const value of mySet.values()) {
    console.log(value);
}