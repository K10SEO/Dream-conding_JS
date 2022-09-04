// 접근 제어자 - 캡슐화 (내부상으로 필요한 데이터를 외부에서 보이지 않도록 외부에서 접근할수 없도록 숨기는)
// 다른 프로그램에서는 private, public, protected 이런 키워드로 접근제어를 컨트롤 할수 있다 근데 자바스크립트는 없다는데 있다
// private(#) - 내부에선 사용 가능 외부에서는 불가능 , public(기본)
class Fruit {
    #name;
    #emoji;
    #type = '과일';
    constructor(name, emoji) {
        this.#name = name; 
        this.#emoji = emoji;  
    }
    #display = () => {
        console.log(`${this.#name}: ${this.#emoji}`)
    };
}

const apple = new Fruit('apple', '🍎')  // 인스턴스 레벨의 프로퍼티와 함수는 만들어진 인스턴스로 접근이 가능하다
//apple.#name = '오렌지'; // 에러가 뜨며 출력되지 않는다(클래스 내부에서만 변경 가능하다고 에러가 뜸)
console.log(apple);
