// const multiple = {
//     [Symbol.iterator]: () => {
//         const max = 10;
//         let num = 0;
//         return {
//             next() {
//                 return { value:  num++ * 2, done: num > max };
//             },
//         };
//     },
// };


// Generator - 값을 생성할 수 있는

function* multipleGenerator() { // Generator를 만들기 위해서는 함수를 사용해야 한다 (function 옆에 *를 붙여주어야한다)
    for(let i = 0 ; i < 10; i++) {
        yield i ** 2; // return 은 값을 바로 반환 하는 반면에 yield는 사용자가 원할때까지 기다렸다가 하나하나씩 리턴해줌 
    }
}
const multiple = multipleGenerator();
let next = multiple.next(); // yield를 사용하여 사용자가 다음 next를 찍어야 1이 됨
console.log(next.value, next.done);

//  multiple.return(); // 리턴을 하는순가 Generator 가 끝나게 된다  밑에 next 메서드를 사용해도 undefined가 출력됨
// multiple.throw('Error!') // multiple 안으로 error를 던짐 // 함수 코드가 죽은것을 볼 수 있다 크래쉬가 뜸

next = multiple.next(); // 1, false 가 출력 
console.log(next.value, next.done);


// try 와 catch를 사용 해주면 error를 잡을 수 있다.
// function* multipleGenerator() {
//     try {
//     for(let i = 0 ; i < 10; i++) {
//         yield i ** 2; // return 은 값을 바로 반환 하는 반면에 yield는 사용자가 원할때까지 기다렸다가 하나하나씩 리턴해줌 
//     }
// } catch (error){
//     console.log(error);
// }
// }