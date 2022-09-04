// Object literal {key: value}
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

// key 선언방법
let apple = {
    name: 'apple', // 문자 (특수한 경우가 아니라면 문자로 카멜케이스를 이용 하여 선언하는것이 좋다)
    'hello-bye': '🖐', //문자열  // 문자열키에는 (-) 같은 특수 문자를 사용할 수 있다
    0: 1, // 숫자
    ['hello-byr']: '🖐', // 대괄호
};

// 속성, 데이터에 접근하기
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['hello-bye']); // 대광호 표기법 bracket notation
apple['name'];

// 속성 추가
apple.emoji = '🥩'
console.log(apple.emoji);
console.log(apple['emoji']); // 항상 문자열로 감싸주어야 한다

// 속성 삭제
delete apple.emoji;
console.log(apple);