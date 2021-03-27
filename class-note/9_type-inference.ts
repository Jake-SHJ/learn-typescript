// 타입 추론
var a = "abc";

function getB(b = 10) {
  var c = "hi";
  return b + c;
}

// 인터페이스와 제네릭을 이용한 타입 추론 방식
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: Dropdown<string> = {
//   value: "abc",
//   title: "hello",
// };

// 복잡한 구조에서의 타입 추론 방식
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<number> = {
  title: "abc",
  description: "ab",
  value: 1,
  tag: 1,
};

// Best Common Type 추론 방식 (가장 적절한 타입)
var arr = [1, 2, true, true, "a"]; // union type으로 추론한다. 가장 근접한 타입을 추론

// Typescript Language Server 소개
// intellisense가 작동하기 위해선 Typescript Language Server가 우선적으로 동작하여야 한다.
