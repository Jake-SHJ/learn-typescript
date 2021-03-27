// 타입 단언
var a;
a = 20;
a = "a";
var b = a as string; // 문자열 할당을 파악할 수 없음, 개발자가 직접 타입을 선언

// DOM API 조작
var div = document.querySelector("div") as HTMLDivElement; // div는 null 일수도 있지만 확실히 존재한다면 단언 처리한다.
// null에 대한 대비
// if (div) {
//   div.innerText;
// }
div.innerText;
