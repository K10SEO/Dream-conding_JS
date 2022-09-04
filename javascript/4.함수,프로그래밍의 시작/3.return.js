// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
function add(a, b) {
    return a + b;
}
const result = add(1, 2);
console.log(result);

function print(text) { // 무언가 프린트할 아무것도 반환하지 않는 함수라면 return을 생략 할 수 있다.
    console.log(text);
}
print('text'); //  굳이 const outCome = print('text'); 이처럼 return을 받는다고 작성 할 필요가 없다


// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예 : 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
// 자주 사용하는 케이스
function print(num) { // print가 숫자를 출력 하는 함수라 볼때 
    if (num < 0) { // num이 0보다 작을경우
        return; // 함수를 종료 (여기서 사용한 return은 return undefiend의 약자라 보면 된다)
    }  // 여기서는 return하는 값이 중요한게 아니라 함수를 일찍 종료 하는것이다
    console.log(num)
}
print(12);
print(-12);

