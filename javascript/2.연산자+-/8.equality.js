// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음 을 확인
// != 값이 다름 을 확인
// === 값과 타입이 둘다 같음 을 확인
// !== 갑과 타입이 다름 을 확인
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); // true // ==는 타입은 다르지만 문자열과 비교를 할때 문자열 안에 있는 숫자 2가 자동으로 변환이 되면서 비교가된다.
console.log(2 === '2'); // false // ===는 숫자는 동일 하지만 타입이 달라 false가 출력이 된다. 
console.log(true == 1); //true // 타입은 다르지만 1을 boolean으로 변환 하면 true 이기 때문에 true가 출력된다.
console.log(true === 1); // false
console.log(false == 0); // true
console.log(true === 0); // false

console.clear();

const obj1 = {
    name: 'js',

}
const obj2 = {
    name: 'js',
    
}

console.log(obj1 == obj2); //false 
/** 메모리 주소로 비교를 하기 때문이라함
 * 두 오브젝트는 개별적인 서로 다른 메모리 주소를 가지고 있는 오브젝트이기 때문
*/
console.log(obj1 === obj2); // false // 값(서로 다른 메모리 주소) 자체가 다름으로 false가 나온다
console.log(obj1.name == obj2.name); // true // 객체 안에 name 비교 하는거기 때문 (서로 같기 때문에)
console.log(obj1.name === obj2.name); // true // name이라는 값도 똑같고 타입도 같은 오브젝트이기 때문에

let obj3 = obj2; // obj2 변수가 가르키고 있는 메모리 주소 참소값을 복사 해서 obj3에 할당하게 된다
console.log(obj3 == obj2); // true // 동일한 주소와 값을 가지고 있다
console.log(obj3 === obj2); // true // 동일한 주소와 값 타입을 가지고있다.


