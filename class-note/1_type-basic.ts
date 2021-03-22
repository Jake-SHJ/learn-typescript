// JS 문자열 선언
// var str = "hello";

// TS 문자열 선언
let str: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor", "Hulk", 10];
let items: number[] = [1, 2, 3]; // = Array<number>

// TS 튜플
let address: [string, number] = ["gangnam", 100]; // 순서에 대한 타입까지 적용하는 것이 튜플

// TS 객체
let obj: object = {};
// let person: object = {
//   name: "capt",
//   age: 100,
// };
let person: { name: string; age: number } = {
  name: "Thor",
  age: 1000,
};
// 객체 내부 프로퍼티의 타입도 지정이 가능하다.

// TS 진위값
let show: boolean = true;
