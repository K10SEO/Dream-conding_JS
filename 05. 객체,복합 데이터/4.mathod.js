// 서로 연관있는 속성과 행동을 묶어둔것이 객체 이다
const apple = {
    name: 'apple',
    display: function () {
        console.log(`${this.name}: 🍟`); // 객체 안에서 자기자신의 속성에 접근할때는 this라는것을 붙여 주어야 한다
    },
};

apple.display();
