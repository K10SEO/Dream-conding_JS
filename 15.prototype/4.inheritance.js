// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji);
  this.owner = owner;
}
// Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype); // Animal 프로토타입을 받아와 Dog의 새로운 프로토타입으로 변경 (object 프로토타입을 상속받던걸 Animal 프로토타입으로 변경해줌)

Dog.prototype.play = () => {
  console.log("같이 놀자옹!");
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji); // call은 클래스의 super와 동일하다 볼 수 있다 // 해석: Animal의 static 메서드 call을 사용, 여기서 this는 name, emoji인자값을 위에 생성한 Animal객체(Animal 생성자함수)에 전달해줘 라는 말
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log("사냥하자! ..🐇..");
};

const dog1 = new Dog("멍멍", "🐶", "엘리");
dog1.play();
dog1.printName();
const tiger1 = new Tiger("어흥", "🐯");
tiger1.printName();
tiger1.hunt();

// instanceof - 인스턴스 객체가 어떤 생성자 함수를 사용하는지,어떤 프로토타입을 상속받는지 알 수 있다
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);
