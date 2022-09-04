// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹다!');
//     }
//     sleep() {
//         console.log('잔다!');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹다!');
//     }
//     sleep() {
//         console.log('잔다!');
//     }
//     play() {
//         console.log('놀자!');
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹다!');
    }
    sleep() {
        console.log('잔다!');
    }
 }


 // extends - 부모 상속자  (부모의 속성이 상속됨)
class Tiger extends Animal {} // Tiger 클래스에 Animal 이라는 부모의 속성이 상속 됨
const tiger = new Tiger ('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal { // Dog 클래스에 Animal 이라는 부모의 속성이 상속 됨
    constructor(color, ownerName) {
        super(color); // super는 내가 상속하고있는 부모클래스를 가르킨다(Animal에 있는 생성자를 전달해줌)
        // super : 내가 상속하고있는 부모를 가르킨다 부모의 생성자 함수를 호출해서 부모의 생성자에 필요한 정보를 전달해준다
        this.ownerName = ownerName; // this.ownerName는 내 dog 라는 클래스에만 ownerName 을 설정해준다
    }
    play() {
        console.log('놀자!');
    }
    // 오버라이딩(overriding) - 부모클래스에 있는것을 덮어씌우는것 ( animal에도 eat 있는데 다른 말을 출력하고싶다 하면 사용할 수 있다)
    eat() {
        // super.eat(); // 여기서 쓰인 super는 부모생성자에 있는 먹다가 출력 후 강아지가 먹는다를 출력 해준다 
        console.log('강아지가 먹는다!'); // Animal 부모클래스에 있는 먹다를 덮어 씌울수 있다.
    }
}
const dog = new Dog ('빨강이', '종서');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();