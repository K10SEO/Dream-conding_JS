// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
//if
if (num % 2 === 0) { // unm을 2로 나누고 남은 숫자가 0, (% : 나누고 남은 수)(2로 나누고 남은 수가 0 이면 짝수 2에 배수 인걸 알수 있다)
    console.log('👍')
} else { // 2의 배수가 아닌 나머지 홀수 일때 출력
    console.log('👎');
}
//ternary (삼항조건연산자)
num % 2 === 0 ? console.log('👍') : console.log('👎');
let emoji = num % 2 === 0 ? ('👍') : ('👎');
console.log(emoji);