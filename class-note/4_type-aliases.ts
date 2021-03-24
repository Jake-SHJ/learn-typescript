// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
};

var seho: Person = {
  name: "세호",
  age: 30,
};

type MyString = string;
var str: MyString = "hello";

type Todo = { id: number; title: string; done: boolean };
function getTodo(todo: Todo) {}

// 타입은 확장이 되지 않는다!
// 그에 반해 인터페이스는 확장이 가능하다. type보다는 interface 사용을 권장한다. (확장에 용이)
