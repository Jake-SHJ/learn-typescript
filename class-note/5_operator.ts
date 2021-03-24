// function logMessage(value: string) {
//   console.log(value);
// }
// logMessage("hello");
// logMessage(100); error! any로 바꾸면 타입 정의에 의미가 없다

// union type
var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "number") {
    // Number의 프로퍼티를 바로 사용 가능
    value.toLocaleString();
  }

  if (typeof value === "string") {
    // string의 프로퍼티를 바로 사용 가능
    value.toString();
  }

  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
function askSomeone(someone: Developer | Person) {
  someone.name;
  // 접근 가능한 속성이 name밖에 없다. Developer와 Person의 교집합, Developer와 Person을 둘 다 만족해야만 안전을 보장할 수 있기 때문(보장된 속성의 제공)
}

// intersection type
var capt: string & number & boolean; // never 불가능한 타입, 모든 타입을 만족해야 하는 이상한 타입
function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.age; // someone이 이미 Developer와 Person의 속성을 다 가지고 있기 때문에 모든 속성이 보장된 상태이다.
  someone.skill;
}

// diffrence

askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
askSomeone({ name: "캡틴", age: 100 });
// 둘 중 하나만 만족시킨다.

askSomeone2({ name: "디벨로퍼", skill: "웹 개발", age: 30 });
// 모든 interface를 만족시킨다.
