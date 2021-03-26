// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText("하이"); // 문자열 하이
// logText(true); // 진위값 true

// 제네릭스 기본 문법
// function logText<T>(text: T): T {
//   // 호출하는 시점에 받은 타입이 arg의 type이고, return 값의 type이다.
//   console.log(text);
//   return text;
// }
// logText("하이"); // 함수를 호출하는 시점에 타입을 넘겨준다.
// logText<string>("하이"); // string을 넘기겠다고 명시적으로 선언

// 함수 중복 선언의 단점 > 타입을 다르게 받기 위해 중복 코드를 생성하는 것..
// function logText(text: string) {
//   console.log(text);
//   text.split("").reverse().join("");
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// logText("a");
// logText(10);
// const num = logNumber(10);
// logText(true);

// 유니온 타입을 이용한 선언 방식의 문제점
// function logText(text: string | number) {
//   //string과 number 속성의 교집합 속성만 확인 가능
//   console.log(text);
//   return text;
// }

// const a = logText("a"); // a의 타입이 string | number로 추론된다.
// a.split(""); // string으로 추론 할 수 없다. 즉 반환값에 대한 문제점이 발생한다.
// logText(10);

// 제네릭의 장점과 타입 추론에서의 이점
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>("abc");
str.split(""); // 반환값도 string 이므로 split을 사용할 수 있다.
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = {
//   value: 10; // error
//   selected: false;
// };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = {
  value: 10,
  selected: false,
};

// 제네릭의 타입 제한
// function logTextLength<T>(text: T): T {
//   console.log(text.length); // 어떤 타입이 들어올지 알 수 없는 상태
//   return text;
// }
// logTextLength("hi");

// 텍스트의 길이 구하는 것과 배열이랑 무슨 상관?
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength<string>(["hi", "abc"]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

logTextLength("a"); // 문자열은 내부 속성에 length가 포함되어 있으므로 통과
logTextLength(10); // 숫자는 length가 속성에 없으므로 에러
logTextLength({ length: 10 }); // length를 가진 객체는 통과

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 정의된 인터페이스의 키값만 인자로 받도록 제한
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption("a");
getShoppingItemOption("name");
