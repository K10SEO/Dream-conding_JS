// 콜백함수
const add = (a, b) => a + b; // a 와 b 를 더하는 함수
const multiply = (a, b) => a * b // a 와 b 를 곱해주는 함수

// 고차함수인 calculator
// 전달된 action은 콜백 함수 이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {// calculator : a, b를 전달 받고 액션이라는 함수를 전달 받는다 외부로 부터 주어지는 함수를 콜백함수라고 한다
    let result = action(a, b); // 그 당시 바로 호출되는게 아니라 함수의 레퍼런스만 전달받아서 그 액션을 나중에 함수안에서 호출 하게 된다
    console.log(result);
    return result;
}

calculator(1, 2, add); // action 값으로 이미 선언된 add 함수 값을 보내주게 되면서 3이 출력된다
calculator(1, 2, multiply)