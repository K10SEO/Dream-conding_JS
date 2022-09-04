// 함수내부에서 외부러부터 주어진 인자의 값을 변경하는 것은 좋지 않다
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트,값) 만들어서 반환해야함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소)
function display(num) {
    num = 5; //좋지 않은 예제
    console.log(num);
}
const value = 4;
display(value)
console.log(value)

//나쁜 예제
function dsiplayObj(obj) {
    obj.name = 'Bob'; // 함수 내부에서 외부로부터 전달되는 값을 변경하는것은 정말 안좋은것이다
    console.log(obj);
}
const ellie = { name: 'Ellie'};
dsiplayObj(ellie);
console.log(ellie);

// 좋은예제
function changeName(obj) { // 이름부터 변경하는 느낌을 주도록
    return {...obj, name:'Bob'}; // 반환할때는 새로운 오브젝트 만들기
}