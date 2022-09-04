// Math
// static properties, method
console.log(Math.E); // 오일러의 상수, 자연로그의 밑
console.log(Math.PI); // 원주율 PI값 중 하나

// static method (스태틱 함수)
// 절대값
console.log(Math.abs(-10)); // 10 // -값의 - 를 때고 절대값으로 만들어줌
// 소수점 이하를 올림
console.log(Math.ceil(1.4)); // 2
// 소수점 이하를 내림
console.log(Math.floor(1.4)); // 1
// 소수점 이하를 반올림
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.7)); // 2
// 정수만 반환 (밑에 있는 소수점 이하를 다 버림)
console.log(Math.trunc(1.5432)); // 1 // 0.5432 를 제외한 ( 1 )만  출력 되는걸 볼수 있음

//많이 쓰임
//최대, 최소값을 찾기
console.log(Math.max(1, 3, 4)); // 지정된 숫자중에 가장 큰 값을 반환 해줌
console.log(Math.min(1, 3, 4)); // 지정된 숫자중에 가장 작은 값을 반환 해줌

// 거듭제곱
console.log(3 ** 2); // 9 // 밑에 코드와 같음
console.log(Math.pow(3, 2)); // 9

// 제곱근
console.log(Math.sqrt(9)); // 3

// 랜덤한 값을 반환 ( 정말 많이 쓰인다 함 )
console.log(Math.random()); // 0 ~ 1 사이에 랜덤한 값을 반환 해줌

// 1~10 랜덤한 숫자를 찾고싶을때
console.log(Math.random() * 10 + 1);
console.log(Math.round(Math.random() * 10 + 1)); // 1 ~ 10 사이의 숫자중 소수점을 제외한 정수만 랜덤하게 출력