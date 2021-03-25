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
