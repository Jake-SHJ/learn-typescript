// 타입 호환
// 인터페이스
interface Developer {
  name: string;
  skill: string;
}
// interface Person {
//   name: string;
// }
class Person {
  name: string;
}
var developer: Developer;
var person: Person;
// developer = person; // error! 'skill' 속성이 'Person' 형식에 없지만 'Developer' 형식에서 필수입니다.
// 더 큰 범위의 인터페이스는 작은 범위의 인터페이스에 대해 타입 호환이 되지 않는다.
developer = new Person();
person = developer;

// 함수
var add = function (a: number) {
  // ...
};
var sum = function (a: number, b: number) {
  // ...
};
add = sum; // '(a: number, b: number) => void' 형식은 '(a: number) => void' 형식에 할당할 수 없습니다.
sum = add;

// 제네릭
interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2; // 데이터가 있으면 서로 호환되지 않는다.
notempty2 = notempty1;
// 'NotEmpty<number>' 형식은 'NotEmpty<string>' 형식에 할당할 수 없습니다.
// 'number' 형식은 'string' 형식에 할당할 수 없습니다.
