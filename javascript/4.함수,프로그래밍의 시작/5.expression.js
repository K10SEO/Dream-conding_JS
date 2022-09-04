// 함수 선언문 function name () { }
// 함수 표현식 const name = function () { }
let add = function (a, b) { // 객체를 다른 변수에 할당하거나 재할당이 가능한데 function(함수도) 객체이기 때문에 할당이 가능하다
    // 함수의 이름이 없는데 이런것을 무명함수라고 한다 
    // 함수 이름을 정해주어도 되긴하지만 add에 할당하기때문에 외부에서 접근할수도 없고 호출도 함수를 담고있는 add로 해야하기때문에 무명함수로 쓴다 
    return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name =  () => { }
add = (a, b) => { // 함수 안에서 특별한 일을 하지않고 값만 리턴하는 경우라면 return,괄호 를 다 생략하고 쓸수 있다(add = (a, b) => a + b;) 
    return a + b;
};
console.log(add(1, 2));

//생성자 함수 const object = new Function(); // 뒤 객체편에서 자세히 다룸

//IIFE (Immedicately-Invoked Function Expressopns) - 즉각적으로 호출이 되는 함수 표현식
(function run () { // 함수를 괄호로 묶어서 식으로 만든다
    console.log('🧛‍♂️');
})(); // 바로 호출 할수 있다.