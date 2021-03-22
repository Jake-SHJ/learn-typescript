// function sum(a, b) {
//   return a + b;
// }

// sum(10, "20"); // 1020
// var res = sum(10, 20);
// res.tolocaleString(); // 오탈자 확인 불가, 메서드 확인 안됨

// js를 ts 처럼 쓰려면
// @ts-check
// @ts-check 를 통해 타입스크립트처럼 타입 체크를 함

/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a, b) {
  return a + b;
}
sum(10, 20);
sum(10, "20"); // 원래는 타입 체크 안됨
