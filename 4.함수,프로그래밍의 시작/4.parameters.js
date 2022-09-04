// 매개변수의 기본값은 무족건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parmeters a = 1
function add(a = 1, b = 1) { // 기본값을 지정 해줄수 있다.
    console.log(a); // 인자값이 전달 되지 않았을때 기본값이 출력된다
    console.log(b);
    console.log(arguments); // 배열처럼 인덱스를 출력하여 a 와 b 를 불러올수 있다
    return a + b;
}
add(2, 2); // 값을 전달하게 되면 기본값은 무시 되고 2, 2 가 전달 된다 
add(); // 인자값이 undefined 일 경우에 기본값을 쓰게 되고 위처럼 외부에서 인자값이 지정됬을경우에는 외부 입력값을 쓴다

//Rest 매개변수 (Rest Parmeters) - 얼마나 많은 개수의 인자가 전달될지 모를때 모든것을 배열로 받고 싶을때 쓴다(ex)...number)
function sum(a,b, ...numbers) { // a와 b 라는 이름으로 인자를 받고 그뒤에는 number이라는 이름으로 배열로 받을래 라는 뜻
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);