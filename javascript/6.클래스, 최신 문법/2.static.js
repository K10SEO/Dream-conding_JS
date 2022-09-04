// static 정적 프로퍼티, 메서드
class Fruit {
    static MAX_FRUITS = 4; // 인스턴스에서는 접근 불가 클래스 이름에서만 접근 가능
    // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name, emoji) {
        this.name = name; 
        this.emoji = emoji;
        
    }
    // 클래스 레벨의 메서드
    static makeRandomFruit() {
        // 클래스 레벨의 메서드에서는 this 를 참조할 수 없음
        return new Fruit('banana', '🍌')
    }

    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`)
    };
}

// console.log(Fruit.name); //fruit 의 이름을 찍거나
// Fruit.display(); // class 이름의 display 함수를 호출 할수가 없다  // 클래스 자체는 (위 코드는) 템플릿이기 때문에 클래스 자체만으로는 호출이 안됨
// 데이터가 없는 상태이기 때문에 호출이 불가능
// 인스턴스 레벨의 프로퍼티와 메서드는 생성된 인스턴스를 통해서 접근하고 호출해야 한다

const banana = Fruit.makeRandomFruit(); // 클래스 레벨의 함수는 클래스 이름으로 접근이 가능하다 
console.log(banana)
console.log(Fruit.MAX_FRUITS);
// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎')  // 인스턴스 레벨의 프로퍼티와 함수는 만들어진 인스턴스로 접근이 가능하다
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊') 

console.log(apple);
console.log(orange);
console.log(apple.name); 
console.log(apple.emoji);

