// 증가 & 감소 연산자 Increment & Decrement operators
let a = 0;
console.log(a);
a++; // a = a + 1; (증가 연산자), 1
console.log(a);
a--; // a = a - 1; (감소 연산자), 0
console.log(a);

console.clear();
// 주의사항!!
// a++ : 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a :  값을 먼저 증가하고 필요한 연산을 함
a = 0;

console.log(a++); // 0
console.log(a); // 1

let b = a++; // a 라는 값을 b에 할당 한 후에 1을 증가시키는것을 볼수 있다, 0
console.log(b);
console.log(a); // a를 출력해 보면 1이 증가 한것을 볼수 있다.

console.log(++a) // 반대로 값이 먼저 증가해 1이 나온것을 볼수 있다