// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍋']

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); //true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
let length = fruits.push('🍑'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🍓')
console.log(fruits);
console.log(length);

//제거 - 제일 뒤
let lastItem = fruits.pop(); // pop은 배열 자체를 수정하고 (즉 아이템을 제거 하고) 제일 뒤에서 제거 된 아이템을 리턴해준다
console.log(fruits);
console.log(lastItem);

//제거 - 제일 앞
lastItem = fruits.shift(); // pop은 배열 자체를 수정하고 (즉 아이템을 제거 하고)제일 앞에서 제거 된 아이템을 리턴해준다
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1) // 1부터 하나만 자른다 자른것을 출력
console.log(fruits);
console.log(deleted); // 삭제 한것을 리턴하여 출력해줌
fruits.splice(1, 0, '🍎') // 인덱스 1부터 하나도 삭제 하지 않고 사과를 추가
console.log(fruits);

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); // 0 부터 2개를 자른다
console.log(newArr); // 잘린 인덱스 2개까지 출력 (기존의 배열을 그대로 유지한 상태로 잘라진 새로운 배열을 출력함)
console.log(fruits); 

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // arr1, arr2 가 합쳐진 새로운 배열을 만들어줌
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();
// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1, 2, 3],
    [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat()); // flat : 배열 안에 또다른 배열이 있다면 그배열을 빼버리고 플랫하게 만들어 준다 1단계까지만 중첩된것만 풀어준다
// 2단계 까지 중첩된것을 풀고 싶다면 플랫 안에 2를 지정해줄수 있다 배열이 여러개 일 경우 풀어주고싶은 만큼 지정하여 풀어줄 수 있다
// falt은 기존 배열을 업데이트 해주지 않고 새로운 배열을 만들어 준다
arr = arr.flat(3) // 플랫된 배열을 기존배열인arr로 업데이트 해줌

// 특정한 값으로 배열을 채우기
// fill은 배열 자체를 수정
arr.fill(0); // 모든 아이템을 0으로 채운다 (배열의 숫자들이 0으로 채워져있는것을 볼수 있다)
console.log(arr);

arr.fill('s', 1, 3); // s로 채워 준다 인덱스 1부터 3까지 
console.log(arr); // 배열의 두번째 세번째가 s로 채워진것을 볼수 있다

arr.fill('a', 1); // 시작 하는 부분만 지정해주면 그부분부터 끝까지 채워진다  
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join(); // 배열이 콤마와 합쳐져 문자열로 출력됨
console.log(text);
text = arr.join(' | '); // 배열이 콤마 대신 | 을 사용 하여 문자열로 출력됨
console.log(text);