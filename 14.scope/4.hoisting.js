// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log("Hello");
}

// 변수(let, const)와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
// console.log(hi);
let hi = "hi";
let func1 = function () {};

// const cat = new Cat();
class Cat {}

let x = 1;
{
  console.log(x);
  let x = 2; // 블록으로 된 렉시컬 환경에서 let x = 2의 let x만 호이스팅된다. 즉, x의 출력값이 1이 나오지않고 크러쉬 에러가 나게 된다.
}
