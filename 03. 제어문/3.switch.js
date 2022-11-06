// 조건문 Conditional Statement
// switch - 조건문에 해당한다
//if와는 성격이 조금 다르다 조건문은 if, if else, else...등이 반복되지만
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우에 switch를 쓴다
let day = 2; // 0:월요일, 1:화요일...6:일요일
let dayName;
if (day === 0) {.
    dayName = '월요일';
} else if (day === 1) {
    dayName = '화요일'
} else if (day === 2) {
    dayName = '수요일'
} else if (day === 3) {
    dayName = '목요일'
} else if (day === 4) {
    dayName = '금요일'
} else if (day === 5) {
    dayName = '토요일'
} else if (day === 6) {
    dayName = '일요일'
}

//switch 
switch (day) { //switch 의 각각의 케이스에는 break를 걸어주어야한다. if 조건문보다 더 짧고 깨긋하게 사용할수 있다고한다.
    case 0:
        dayName = '월요일';
        break;
        case 1: 
        dayName = '화요일';
        break;
        case 2:  
        dayName = '수요일';
        break;    
        default: // switch case 중 모든 조건이 해당하지 않는경우에 실행 할 수 있다 (if조건문에 else 와 같다)
        console.log('해당하는 요일이 없음')
}
console.log(dayName)

// break를 사용하지 않아야하는 경우 - 하나 이상의 여러가지 케이스가 동일한 코드를 실행해야한다면 break를 걸지 않을수 있다.
let condition = 'okay'; // okay,good -> 좋음, bad -> 나쁨
let text;
switch(condition) {
    case 'okay':
    case 'good':
        text = '좋음';
        break;
    case 'bad':
        text = '나쁨';
        break;   
}
console.log(text)
