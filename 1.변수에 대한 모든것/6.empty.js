//null, undefind
let variable; // 값이 없기 때문에 undefind 가 나온다.
console.log(variable);

variable = null // 값이 없다 라고 명시해 줄수 있다.
console.log(variable);  

/* value - 값이 있는 상태이다
   null - 값을 담고 있어야되는데 값이 없구나 라고 명시해 줄수 있다
   undefined - 값이 있는지 없는지 정해지지 않은 상태이다
*/

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태

// typeof - 무슨 타입인지 출력 할수 있다.
console.log(typeof 123); // 숫자열(number) 타입이 출려된다
console.log(typeof '123'); // 문자열(string) 타입이 출력된다
console.log(typeof null); // null 이란것을 표현하기 위해서 null이라는 오브젝트로 만들어 표현한다.
console.log(typeof undefined); // 값이 비어있다는것을 표현해준다
