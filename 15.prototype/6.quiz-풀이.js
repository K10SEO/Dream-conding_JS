// 앞에서 적은 프로토타입상속 클래스상속으로 병견하기
class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);
    this.owner = owner;
  }
  printName() {
    console.log(`${this.name} ${this.emoji} ${this.owner}`);
  }
  play() {
    console.log("같이 놀자!");
  }
}

class Tiger extends Animal {
  constructor(name, emoji) {
    // constructor 생략 가능 (상속 받을 시, 자식 클래스에서 constructor를 생략하게 되면 부모의 constuctor를 가져오게 된다. )
    super(name, emoji);
  }
  hunt() {
    console.log("사냥하자! ..🦒..");
  }
}

const dog1 = new Dog("멍멍", "🐶", "종서");
dog1.play();
dog1.printName();
const tiger1 = new Tiger("어흥", "🐯");
tiger1.hunt();
tiger1.printName();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);
