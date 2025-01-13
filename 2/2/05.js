// 일급객체로써의 함수
const person = {
    name : 'John',
    age : 31,
    isMarried : true,
    sayHello : function () {
        console.log('Hello, My name is ' + this.name);
        console.log(`Hello, My name is ${this.name}`);
    },
    sayHi: () => {
        console.log(`Hello, My name is ${this.name}`);
    }
}

person.sayHello();
person.sayHi();