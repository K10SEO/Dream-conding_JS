// 조건문 Conditional Statement
// if(조건) { } : 조건에 충족할때 중괄호 안에 코드를 실행해준다
// if(조건) { } else { } : 조건에 맞지 않으면 else {} 코드를 실행을 해준다
// if(조건1) { } else if(조건2) { } else { } : 조건1 또는 조건2 라면 실행해준다 둘다 맞지 않으면 else를 실행
let fruit = 'orange';
if (fruit === 'apple') { // 조건 ( 과일이 = 애플일때)
    console.log('apple'); // 애플을 출력
} else if (fruit === 'orange') { //조건 (과일이 = 오렌지일때)
    console.log('!!'); // !! 을 출력
} else { // 조건이 둘다 맞지 않을때
    console.log('!') // ! 출력 // 과일이 오렌지로 선언되었기 때문에 2번째 조건문이 실행된다
}

if (false){ // if안에는 true 나 false로 평가될수 있는 표현식이 들어간다 (true일때는 출력 false 출력되지 않음)
    console.log('출력되지 않음');
}