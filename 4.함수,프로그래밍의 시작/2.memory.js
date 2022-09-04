function add(a, b) {
    // console.log(a); // 인자값을 주었을때는 a = 1, b = 2 로 출력되는걸 볼 수 있다
    // console.log(b); // 인자값이 없을때는 undefiend 로 출력되는걸 볼 수 있다
    return a + b;
}
const sum = add; // 이렇게 선언을 해주게되면 sum 과 add의 메모리값이 같아진다
// (메모리값이 같이 때문에 함수이름인 add가 아닌 sum에 인자를 넣어 호출을 할수 있다)

// console.log(sum(1, 2)); // 둘중 아무것을 호출 할수 있다. 
console.log(add(1, 2)); // 함수를 호출하고 싶을때는 소괄호를 이용하여 호출해주어야 하고 인자값을 같이 전달해주어야함
console.log(add()); // NaN 이 출력 된다 인자를 주지 않았기 때문에 a,b 가 undefiend가 된다