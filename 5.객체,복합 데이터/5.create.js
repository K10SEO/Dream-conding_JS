// const apple = {
//     name: 'apple',
//     display: function () {
//         console.log(`${this.name}: 🍟`); // 객체 안에서 자기자신의 속성에 접근할때는 this라는것을 붙여 주어야 한다
//     },
// };

// const orange = {
//     name: 'orange',
//     display: function () {
//         console.log(`${this.name}: 🥙`); // 객체 안에서 자기자신의 속성에 접근할때는 this라는것을 붙여 주어야 한다
//     },
// };

//생성자 함수 
function Fruit(name, emoji) { // 시작하는 첫번째를 대문자로 작성해주어야한다
    this.name = name; // this라는 키워드를 사용하면 객체 자기자신을 가리킬수 있다 객체에 name이라는 키가 만들어진다 (인자에 값이 키에 할당이 됨)
    this.emoji = emoji;
    this.diplay = () => {
        console.log(`${this.name}: ${this.emoji}`)
    }
    //return this; // return this;는 생략 가능하다 (생성자 함수는 자동으로 리턴이 된다)
} 

const apple = new Fruit('apple', '🍎') // new 라는 키워드를 이용해서 새로운 과일을 찍어 낼수 있다
const orange = new Fruit('orange', '🍊') // 위 같이 정해진 템플릿을 이용해서 원하는 데이터를 전달해줄수 있다

console.log(apple);
console.log(orange);
console.log(apple.name); // 메서드로 하나씩 만드는거와 똑같이 네임이 출력됨
console.log(apple.emoji); // 똑같이 이모지가 출렫됨
apple.diplay(); // 똑같이 디스플레이가 출력됨

// 특정한 템플릿에 맞게 객체를 쉽게 만들어 줄수 있는 생성자 함수를 이용하면 정해진 틀안에서 원하는 객체를 만들수 있다