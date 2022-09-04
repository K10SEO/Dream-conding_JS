const num1 = 123; // 숫자를 선언
const num2  = new Number(123); // 숫자가 들어있는 객체로 만듬
console.log(typeof num1); // number
console.log(typeof num2); // object

console.log(Number.MAX_VALUE); // MAX_VALUE : 객체를 만들지 않고 클래스레벨에서 접근할 수 있는 상수변수
// 정수에서 사용할 수 있는 가장큰 숫자가 출력됨 (최대로 출력되는 값)
console.log(Number.MIN_VALUE); // 최소로 출력되는 값
console.log(Number.MAX_SAFE_INTEGER); // 안전하게 사용할수 있는 최대값
console.log(Number.MIN_SAFE_INTEGER); // 안전하게 사용할수 있는 최대값
console.log(Number.NaN); // 숫자가 아님
console.log(Number.NEGATIVE_INFINITY); // -무한
console.log(Number.POSITIVE_INFINITY);// 무한

if(num1 === Number.NaN) { // num1이 숫자 인지 아닌지 비교 할때 사용
}
if(Number.isNaN(num1)) {   
}
if(num1 < Number.MAX_SAFE_INTEGER) { // num1 이 MAX_SAFE_INTEGER 보다 작은지 아닌지 확인 할 수 있음
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2 가 나온다 // e+2 = 10의 2승 // 1.02 * 10의 2승
// toExponential : num3 을 지수로 표기 해준다

// 실수를 반올림하여 문자열로 변환
const num4 =  1234.12;
console.log(num4.toFixed()); // 실수가 정수로 변환되여 문자열로 출력

console.log(num4.toString()); // 숫자 자체를 문자열로 변환 해줌
console.log(num4.toLocaleString('ar-EG')); // 숫자를 그 나라 지역에 맞게 사용할때

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 5라는 값을 주었기 때문에 1234.1 까지 출력 되는것을 볼 수 있음
console.log(num4.toPrecision(5)); // 1.2e+3 출력 // 전체 자릿수 표기가 안될때는 지수표기법으로 반환됨

if(Number.EPSILON > 0 && Number.EPSILON < 1) {
console.log(Number.EPSILON); // 0과 1사이에서 나태낼 수 있는 가장 작은 숫자
}
const num = 0.1 + 0.2 - 0.2; // 자바스크립트에서 내부적으로 계산 할때는 10진수를 2진수로 변화하여 연산하여 10진수로 다시 변환 하여 출력해주는데
// 이런 과정에서 정확하게 부동 소수점까지 계산 되지 않아 작은 오차가 발생함 그래서 0.10...3 으로 출력이 됨
// 이런 작은 오차들을 나타내는게  EPSILON 이다
console.log(num);

function isEqual(original, expected) {
    return original === expected;
    // 작은 미세한 차이를 간주하고싶지않다면 // return original - expected < Number.EPSILON; // true 가 출력
    // return Math.abs(original - expected) < Number.EPSILON; // Math.abs (-값이 되지 않도록 절대값 함수를 이용함) 뒤에서 다룰거임
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // false // num 은 0.1000000003 이기 때문에

// *정의
// 자바스크립트에서 실수끼리 계산을 할때 우리가 예상하지 못한 정말 작은 미묘한 차이가 발생할수있다
// 그것을 감지하려면 위에 Number에 정의된 static 프로퍼티인 EPSILON을 사용 하면 된다