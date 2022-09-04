// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 (조금더 최신 다른 객체지향 프로그래밍에서도 사용)

//클래스 class
class Fruit {
    // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name, emoji) {
        this.name = name; 
        this.emoji = emoji;
        
    }
    display = () => { // class에 필요한 멤버함수는 생성자 밖에서 함수를 정의한다
        // 객체 안에서 사용하는 멤버함수가 있다면 이름만 작성해서 일반 함수나 arrow function으로 작성해 주면 된다
        console.log(`${this.name}: ${this.emoji}`) // 여기서 함수를 쓸때 function.display 처럼 function이라는 키워드를 붙이면 문법에 오류가 난다
    }
} 
// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎') 
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊') 

console.log(apple);
console.log(orange);
console.log(apple.name); 
console.log(apple.emoji);
apple.diplay();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj =  {name: 'ellie'}

// 클레스와 객체의 차이
//객체는 그냥 만들어진 객체이고 어떤 클래스를 통해서 만들어진 객체라면 인스턴스라고 부른다.