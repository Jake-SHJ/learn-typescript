class Person {
  private name: string; // 먼저 정의 필요
  public age: number; // 변수 접근 범위 설정 가능
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
