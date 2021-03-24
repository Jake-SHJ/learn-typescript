// 숫자형 enum
// enum Shoes {
//   Nike, // 0, 초기화 값이 없으면 0부터 auto increment
//   Adidas, // 1
// }

// 문자형 enum
enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 숫자형일때 0, 문자형일때 '나이키'

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}
askQuestion(Answer.Yes); // enum에서 정의한 값만 사용이 가능
askQuestion("Yes"); // error!
// askQuestion("예스");
// askQuestion("y");
// askQuestion("Yes");
