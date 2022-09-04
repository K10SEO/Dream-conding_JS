// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정)
let a = 5;
a = -a; // (-a) = -1 * 5 (그냥 -만 붙이면 -1을 곱하겠다 라는 수학이랑 비슷하다) 
console.log(a);
a = -a; // -1를 한번 더 곱하면 플러스가 된다
console.log(a);

a = +a;
console.log(a);

a = -a; // -5
a = +a; // +(-5)
console.log(a);

let boolean = true;
console.log(boolean); // true
console.log(!boolean); // false (!: 부정)
console.log(!!boolean); // 부정을 부정 해서 true

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있다.
console.clear();
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

console.log(!!1); // ! : 부정연산자, !! : 값을  boolean 타입으로 변환함 






