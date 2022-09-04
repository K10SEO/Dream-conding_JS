// 배열 생성 방법
let array = new Array(2); // 2라는 사이즈를 정해 비어있는 배열을 만듬
console.log(array);

array = new Array(1, 2, 3); // 실질 아이템을 전달하여 아이템을 배열로 만듬
console.log(array);

array = Array.of(1, 2); // static 함수를 이용 하여 원하는 계수만큼 무한정 전달 할수 있는 배열
console.log(array);

const anotherArray = [1, 2, 3, 4]; // 배열 리터럴( [] )을 이용하여 배열을 만듬
console.log(anotherArray);
array = Array.from(anotherArray) // 기존의 배열로부터 새로운 배열을 만들때
// from : iterable 한 순회가 가능한 모든것을 전달 할 수 있다.

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사하다
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특후안 객체이다
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있다(Typed Collections)
array = Array.from({
    0: '안',
    1: '녕',
    length: 2,
})
console.log(array);