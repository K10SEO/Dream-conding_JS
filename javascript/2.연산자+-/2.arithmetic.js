// 산술 연산자 (Arithmetic operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지값
// ** 지수연산자 (거듭제곱)

console.log(5 + 2); // 7
console.log(5 - 2); // 3
console.log(5 * 2); // 10
console.log(5 / 2); // 2.5
console.log(5 & 2); // 0
console.log(5 ** 2); // es7 에 추가된 연산자

// + 연산자 주의점!
let text = '두개의' + '문자를'; // +연산자는 문자끼리도 가능하다
console.log(text);
text = '1' + 1; // 숫자와 문자열을 더하면 문자열로 변환된다(11이라는 값이 문자열로 바뀌어 출력됨)(숫자와 문자열을 더하는걸 주의!!)
console.log(text);



