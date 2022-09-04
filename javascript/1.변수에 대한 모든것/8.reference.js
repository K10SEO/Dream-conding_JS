// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; // 1
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
    name: '사과',
};
let orange = apple; // apple 이 가지고 있는 주소값을 가지고 오게 된다
orange.name = '오렌지';
console.log(apple);
console.log(orange);
// 동일한 오브젝트를 가지고 있어 한곳에서만 바꿔도 동일한 값을 가지고 있는것을 볼수 있다.
