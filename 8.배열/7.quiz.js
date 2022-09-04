// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']


// 고차함수 사용한 코드
function replace(array, from, to) {
    return array.map(item => item === from ? to : item) // item을 전달받아서 item이 from과 같다면 to를 쓰고 아니면 item을 쓴다
}

// // 재사용성을 높인 코드
// function replace(array, from, to) {
//     const replaced = Array.from(array);
//     for(let i = 0; i < replace.length; i++) {
//         if(replace[i] === from) {
//             replaced[i] = to;
//         }
//     } 
//     return replace;
// }
// const array = ['🍌', '🍓', '🍇', '🍓']
// const result = replace(array, '🍓',  '🥝')
// console.log(result);


// 퀴즈2:
// 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2


// function count(array, item) {
//     let counter = 0;
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === item) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// // 고차함수를 사용한 코드
// function count(array, item) {
//     return array.reduce((count, value) => {
//         if(value === item) {
//             count++;
//         }
//         return count;
//     }, 0);

//     console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

//고차함수 filter을 사용하여 if문을 사용하지 않고 더 짧아진 코드 
function count(array, item) {
    return array.filter(value => value === item).length;
}
    
// 퀴즈3 : 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']

// function match(input, search) {
//     const result = [];
//     for(let i = 0; i < input.length; i++) {
//         if(search.includes(input[i])) {
//             result.push(input[i]);
//         }
//     }
//     return result;
// }
// console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

//고차함수를 이용한 풀이
function match(input, search) {
    return input.filter(item => search.includes(item));
}


// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums //
    .filter(num => num > 5) // [16, 25, 34, 21] 5이상의 숫자들로 새로운 배열이 만들어짐
    .reduce((avg, num, _, array) => avg + num / array.length, 0) // 고차함수는 인자로 순회값, 현재값, 인덱스, 베열 자체를 받아올 수 있다
    // 사용 하지 않는 인자들은 _ 언더스크롤바로 작성해주면 사용하지 않는것으로 명시해 줄 수 있다 
    // 인덱스는 사용하지 않아 _ 로 명시