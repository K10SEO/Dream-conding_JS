const x = 0;
const y = 0;
const coordinate = {x, y}; // {x: x, y: y}; 이름이 똑같다면 이 좌표를 생략 하여 만들수 있다.  // 좌표를 만드는 object
console.log(coordinate);

function makeObj(name, age) {
    return {
        name: name, // name이라는키에 전달받은 name의 값
        age: age, // age 라는 키에 전달받은 age 값
    };
}
// 위 식을 줄여서 사용 할 수 있다
function makeObj(name, age) {
    return {
        name, // 키와 함수에 받는 value 의 이름이 같으므로 생략이 가능하다
        age, // 키와 함수에 받는 value 의 이름이 같으므로 생략이 가능하다
    };
}