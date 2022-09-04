// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) { }
/**실행순서: 
 * 1. 변수선언문
 * 2. 조건식의 값이 참이면 { } 코드블럭을 수행
 * 3. 증감식을 수행
 * 4. 조건식이 거짓이 될때까지 2번과 3번을 반복함
*/

for(let i = 0; i < 5; i++) { // for안에 변수는 for문을 얼마 만큼 반복할건지 기억하는 변수이다 (i = 0 이고, i 가 5보다 작을때, i는 1씩증가한다)
    console.log(i);
}


for(let i = 0; i < 5; i++) {
 for(let j = 0; j < 5; j++) {
     console.log(i,j)
 }
}

// 주의할점
// 조건식이 언제가는 거짓이 되어서 반복이 중지 되어야한다
// 조건식이 끝나지 않으면 무한루프 라는 것에 걸리게 된다

//무한루프 식
//for (;;) {    
//}

//반복문 제어: continue, break;
for(let i = 0; i < 20; i++) {
    if(i === 10) {
        console.log('i가 드디어 10이 되었다');
        break; // break를 사용 하면 원하는곳에서 반복을 멈출 수 있다
    }
    console.log(i); // break로 인해 출력되지 않는다
}

for(let i = 0; i < 20; i++) {
    if(i === 10) {
        continue; // continue는 아래 있는 코드는 무시되고 바로 그다음 반복으로 넘어간다 (10은 출력이 안되고 11로 바로 넘어간것을 볼수 있다.)
        console.log('i가 드디어 10이 되었다');
        break;
    }
    console.log(i);
}