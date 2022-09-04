// 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
console.log(text.length)
console.log(text[0]);// 
console.log(text[1])// 
console.log(text[2])// 
console.log(text[3])// 
console.log(text[4])//
console.log(text[5])
console.log(text[6])
console.log(text[7])
console.log(text[8])
console.log(text[9])
console.log(text[10])
console.log(text[11])
console.log(text[12])

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'uesr1, user2, user3, user4';
// ['uesr1, user2, user3, user4']
console.log(ids.split(' '));

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
setInterval // API를 이용하여 만드셈 구글링 해보셈
const time = setInterval(() => {
    const now = new Date
    //console.log(now.toString());
}, 1000)


// 엘리 해답

// 1번 퀴즈
for(let i = 0; i < text.length; i++) {
    console.log(text[i]);
}


// 2번 퀴즈
const array = ids.split(', ')
console.log(array);

// 3번 퀴즈
setInterval (() => {
    const now = new Date();
    //console.log(now.toLocaleString('ko-KR'));
}, 1000)