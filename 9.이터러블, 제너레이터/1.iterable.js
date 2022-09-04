// Iterable 하다는건 순회가 가능하다는 것이다
// [Symbol.iterator](): IterableIterator<T>; 
// <T> 는 제네릭 타입을 가르킨다 // 제네릭 타입: 일반타입 이다 일반타입은 타입을 미리 지정해주는것이 아닌 필요에 의해 지정할수 있도록 하는것
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는것은
// 순회 간으한 객체다 라는것을 의미한다
// 순회가 가능하면 무엇을 할 수 있을까?
// 빙글빙글 도는 반복문, 연산자들을 사용 할 수 있다
const array = [1, 2, 3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterator 사용해 보기
const iterator = array.values();
while(true) {
    const item = iterator.next();
    if(item.done) break; // 마지막 아이템이면 멈춤
    console.log(item.value);
    
}
for(let item of array.values()) { // array.values 에 있는 iterator 값을 하나하나씩 순회하며 item에 할당하여 순회하며 출력해 줄 수 있다.
    console.log(item); // array 는 iterable 하기때문에 .values를 붙여주지 않아도 작동을 한다
}

const obj = {id: 123, name: 'jongseo'}; // 일반 객체에선 iterarble 규격사항을 준수 하지 않는다 그래서 obj로는 of 라는 연산자를 사용 하지 못한다
for(const key in obj) { // 대신 obj는 in 이라는 키워드를 사용 할 수 있다.  obj의 키를 순회 하며 받아와 출력 되는걸 볼수 있따 
    console.log(key);
}