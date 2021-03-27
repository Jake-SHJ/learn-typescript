interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {
    name: "Tony",
    age: 33,
    skill: "Iron Making",
  };
}

var tony = introduce();
console.log(tony.skill); // 공통 속성만 볼수 있음, age와 skill을 명시적으로 넣었음에도 불구하고..
if ((tony as Developer).skill) {
  // 단언을 통해 skill을 사용할 수 있음
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
} // 계속 단언 선언을 해야되서 코드량이 늘어난다.

// 타입 가드의 정의와 적용
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  tony.skill; // 바로 접근이 가능하다.
} else {
  tony.age; // Developer가 아니면 Person으로 바로 접근
}
