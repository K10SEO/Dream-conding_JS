// 논리연산자 Logical operator
// && 그리고
// || 또는
// ! 부정(단항연산자에서 온것)
// !! 불리언값으로 변환 (단항연산자 응용버전)
let num = 21;
if(num >= 0 && num < 9) { // num이 0보다 작거나 같을때 그리고 num이 9보다 작을때
    console.log('👍');
}

if(num >= 0 || num > 20) { // num이 0보다 작거나 같을때 또는 num이 20보다 클때
    console.log('👍');
}

if(!(num >= 0 || num < 9)) { // num이 0보다 작거나 같을때 또는 num이 9보다 작을때를 부정하는
    console.log('👍'); // 조건 자체를 부정하기떄문에 출력되지 않는다
}

if (num != 9) { // num이 9가 아닐때
    console.log('👍')
}

console.log(true && true); // true // 출력됨
console.log(true && false); // false // 출력되지않음
console.log(false && true); // false // 출력되지않음
console.log(false && false);// false // 출력되지않음

console.log(true || true); // true // 출력됨
console.log(true || false); // true // 출력됨
console.log(false || true); // true // 출력됨
console.log(false || false); // false // 출력되지않음

console.log(!'text'); // 문자열은 true인데 이것을 부정해서 false
console.log(!!'text'); // 문자열은 true인데 부정을 부정해서 true 
// (!!:(부정을 부정으로 봐도되지만)불리언 값으로 변환 시켜주는 역할을 한다) (문자열은 불리언 값으로 변환 시키면 true 이다)