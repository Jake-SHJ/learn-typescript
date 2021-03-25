// ES2015 (ES6)
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var seho = new Person("세호", 30); // 생성 되었습니다.
console.log(seho); // Person { name: '세호', age: 30 }

// prototype
var user = { name: "capt", age: 100 };
// var admin = { name: "capt", age: 100, role: "admin" }; // 속성의 중복
var admin = {};
admin.__proto__ = user; // prototype 참조
console.log(admin.name, admin.age); // "capt", 100
admin.role = "admin";

// prototype 활용사례 - Built-in Javascript API or Javascript Native API
var obj = { a: 10 };
Object.keys(obj); // [ 'a' ]
obj.hasOwnProperty("a"); // true

// 프로토타입과 클래스와의 관계
// 클래스와 동일한 기능 = 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person("캡틴", 100);
