// typeof: 데이터 타입을 확인 할 수 있다
//값을 타입 문자열로 반환 해준다
let variable;
console.log(typeof variable); // undefined(값이 없는) 로 출력된다

variable = '';
console.log(typeof variable); // string(문자타입) 으로 출력된다

variable = 123; // <- 할당된 값의 따라 타입이 결정된다
console.log(typeof variable); // number(숫자타입) 로 출력된다

variable = {};
console.log(typeof variable); // object (오브젝트 타입) 이 나온다

variable = function () {};
console.log(typeof variable); // function(함수 타입) 이 나온다

variable = Symbol();
console.log(typeof variable); // Symbol 타입이 나온다

console.log(typeof 123); // 수자열타입으로 나오지만
console.log(typeof '123'); // 따옴표를 써주면 문자열로 나온다