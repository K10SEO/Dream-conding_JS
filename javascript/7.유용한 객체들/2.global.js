// 자바스크립트에서 this란 대체적으로 전역객체를 가르킨다
console.log(globalThis);
console.log(this);
// console.log(Infinity);
console.log(NaN);
console.log(undefined);


// 전역적으로 사용하는 유용한 함수들

eval('const num = 2; console.log(num)') // eval : 자바스크립트를 한줄한줄 표현 해줌
// 문자열 형태로 자바스크립트 형태로 작성하면 코드로 평가하여 값으로 출력 할수 있다
console.log(isFinite(1)); // true가 출력 // isFinite : 숫자가 유한 한지 아닌지 확인 해준다
// console.log(Infinity(1)); // false가 출력

console.log(parseFloat('12.43')); // parseFloat : 문자열이긴 하지만 숫자를 나태내고 있다면 숫자로 변환 해줌
console.log(parseInt('12.43')); // parseInt : 문자열 안에 든 숫자를 정수로 바꾸어줌

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함 
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = 'https://드림코딩.com'; // 이렇게 주소에 한글이 들어있으면 인코딩을 해주어야함
const encoded = encodeURI(URL); // URL을 인코딩 해줌 ㅋ
console.log(encoded); // URL을 이스케이프 처리해서 출력된걸 볼수있음

const decoded = decodeURI(encoded); // 이스케이프 처리된 주소를 다시 한글로 바꿔줌
console.log(decoded); // 한글주소 다시 바뀌어 출력된것을 볼수 있음

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part)); // 부분적인 것이 이스케이프 처리 된것을 출력해줌
// encodeURIComponent : 부분적인 것을 이스케이프 처리해줌