const fruits = ['🍌', '🍎', '🍇', '🍑']

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for(let i = 0; i < fruits.length; i++) { //for 루프를 이용하면 일일이 출력하지 않아도 된다
    console.log(fruits[i]);
}

// const fruits = ['🍌', '🍎', '🍇', '🍑']
// 추가, 삭제 - 좋지 않은 방식
fruits[4] = '🍓'; // 인덱스로 바로 접근하는것은 좋지 않다(인덱스로 바로 추가하는것은 좋지 않다)
console.log(fruits);

delete fruits[1]; // 이렇게 삭제를 하면 비어있는 배열이 생긴다 (1 인덱스 자리가 비어있는채로 출력)
console.log(fruits);