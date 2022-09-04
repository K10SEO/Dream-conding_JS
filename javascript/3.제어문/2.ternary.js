// 삼항 조건 연산자 Ternary Operator
// 조건식,조건 표현식 ? 참인경우 : 거짓인경우 (참이면 1조건식이 실행, 거짓이면 2조건식이 실행된다)
let fruit = 'orange';
if (fruit === 'apple') {
    console.log('apple');
} else {
    console.log('!')
}

fruit === 'apple' ? console.log('apple') : console.log('!'); // 위 if 조건문을 줄여서 쓸 수 있다
 
let emoji = fruit === 'apple' ? 'apple' : '!'; // 이런식으로 줄여 쓸수도 있다고 한다
console.log(emoji)