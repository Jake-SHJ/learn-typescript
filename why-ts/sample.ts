function add(a: number, b: number): number {
  return a + b;
}

var result = add(10, 20);
// result가 number임을 바로 알수있음, intellisense를 통해 Number.prototype 메서드를 바로 사용 가능
result.toLocaleString();
