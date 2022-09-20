// function add (num1,num2) { // 인자는 원하는대로 작성해주어도 된다
//     const result = num1 + num2; // 입력된 인자를 더해서 result 변수에 할당
//     console.log(result); // 할당된 값을 출력
// }

// 위 식을 return을 사용해 간결하게 만들 수 있다
// 사용예제 1
function add (num1,num2) {
    console.log('function') // 문자열 function을 출력
    return num1 + num2; // return : 값을 반환 시켜 준다 (인자로 받은 값을 더해 반환시켜 출력)
}
const result = add(1,2)
console.log(result)

// 사용예제 2
function fullName(firstName, lastName){ // 모든 사람마다 let fullName을 선언 해줘야 되는것을 함수로 편하게 출력해줄수 있다.
    return `${lastName} ${firstName}`;
}
let lastName = '김';
let firstName = '지수';
// let fullName = `${lastName} ${firstName}`;
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
// let fullName2 = `${lastName2} ${firstName2}`;
console.log(fullName(firstName2, lastName2));