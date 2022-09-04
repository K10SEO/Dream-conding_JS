// Spread 연산자 (전개구문)
// 모든 Iterable은 Spread 가 될 수 있다
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐 질 수 있다
// function(...iterable)
// [...iterable]
// {...obj}

function add (a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2])); // add에 nums 배열을 넣을때
console.log(add(...nums)); // spread 형식으로 작성 // 위와 같이 같은 값이 나오는걸 볼 수 있음

// Rest parameters
function sum(first, second, ...nums) {
    console.log(nums);
}
sum (1, 2, 0, 1, 2, 4); // nums 를 출력해 보면 first, second를 제외한 [0, 1, 2, 4] 가 출력 되는것을 볼수 있다

// Array Concat - 두개의 배열을 합침
const fruits1 =  ['🍎', '🥝'];
const fruits2 =  ['🍓', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, ...fruits2]; // spread를 사용 하면 concat을 사용 하지 않고도 같은 값을 출력 할 수 있다.
console.log(arr);

//  Object
const jongseo = {name: 'Jongseo', age: 25, home: {address: 'home'}}
const updated = { // 새로운 obj를 만듬
    ...jongseo, // 위에 jongseo obj 풀어서 내용을 가져옴
    job: 's/w engineer' // 가져와진 내용들에 job을 추가 함
}
console.log(updated); // 업데이트 된 새로운 obj가 출력, 새로운 obj 이기때문에 기존 obj는 바뀌지 않는다