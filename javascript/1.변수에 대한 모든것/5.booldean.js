// 불리언 타입
let 참 = true; // 변수 네이밍을 할때 한국어는 쓰면 안된다 (지금은 예시로 사용함)
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예:
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);

console.clear(); // 위에 모든 값을 지울수 있다. (밑에 값을 보기 위함)
// Falshy 거짓인 값
console.log(!!0); // 0은 false로 간주 된다 // (!!) 느낌표 두개를 붙이면 값을 false ture 로 변화을 해준다
console.log(!!-0); 
console.log(!!'');
console.log(!!null); 
console.log(!!undefined); 
console.log(!!NaN); 


//Truthy 참인 값
console.log(!!1);
console.log(!!-1); 
console.log(!!'text'); 
console.log(!!{});
console.log(!!Infinity);

