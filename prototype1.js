class Animal {
  constructor(name) {
    this.name = name;
  }
  mal() {
    console.log("나는" + `${this.name}` + "입니다");
  }
}

class Tiger extends Animal {
  constructor(name, sound) {
    super(name);
    this.sound = sound;
  }
  tig() {
    super.mal();
  }
}

let a = new Tiger("호랑이", "어흥");
console.log(a);
a.mal();
