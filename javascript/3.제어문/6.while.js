// while
// while(조건) {}
//조건이 false가 될때까지 {} 코드를 반복 실행
//while은 변수를 따로 초기화 하거나 증가하는 부분이 들어있지 않아 외부에서 해주어야한다.
let num = 5;
while(num >= 0) {
    console.log(num);
    num--;
}

let isActive = false; // isActive를 false로 선언 // 밑에 코드 실행하고싶을시 true 로 바꿔주어야함
let i = 0;
while(isActive) { // isActive가 true 일때 반복 
    console.log('아직살아있다') // 아직살아있다 가 반복 출력
    if(i === 10) { // i가 10과 같을때
     break; // 코드를 멈춘다
    }
    i++; // i를 1씩 증가 시킨다
}

do { //do-while 은 한번 실행 후 조건을 검사 한다
    console.log('do-while 아직살아있다');
} while (isActive);

//조건이 맞을때만 사용 하고싶다 하면 while
//무족건 한번은 사용 하고싶다 하면은 do-while                               