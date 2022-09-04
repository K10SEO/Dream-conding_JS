let intger = 123; //정수
let negative = -123; // 음수
let double = 1.23; // 실수
console.log(intger);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수

console.log(binary);
console.log(octal);
console.log(hex);

//숫자를 나눌때 발생할수 있는 데이터 값
console.log(0 / 123); // 0
console.log(123 / 0); // Infinity (Infinity: 숫자를 나타낼수 없는값)
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // NaN (Not a Number) 숫자가 아닐경우

//bigInt - 엄청 긴숫자 큰숫자를 나타낼수 있다.
let bigInt = 12093812091209391023809120909120938012309n;
console.log(bigInt);