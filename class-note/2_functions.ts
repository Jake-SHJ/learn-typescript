// 파라미터와 반환값에 타입을 정의, 반환값의 타입을 지정하지 않아도 타입 추론이 작동

// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20, 30, 40); // 불필요한 인자 제한
sum(10); // 인자가 적어도 안됨

// 함수의 옵셔널 파라미터
// 파라미터 갯수가 정해져있는 경우가 아니라면..
function log(a: string, b?: string) {} // 특정 파라미터를 선택적으로 사용
log("hello world");
log("hello ts", "abc");
