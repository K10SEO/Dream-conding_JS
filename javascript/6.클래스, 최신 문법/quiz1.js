// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기


class Counter {
    #value;
    constructor(startValue) { // 외부에서 startValue 값을 전달 받음
        if(isNaN(startValue) || startValue < 0 ) { // startValue 값이 숫자가 아니거나 0보다 작다면 
            this.#value = 0; // 0으로 초기화
        } else {
            this.#value = startValue // 만약 그 외에 0보다 큰 숫자가 주어진다면 그 숫자부터 카운터 될수 있도록
        }
    }
    get value() { // 현재 값을 읽기만 할수 있음
        return this.#value
    }
    increment = () => { // increment 를 이용해 value를 증가 시킬수 있음
        this.#value++;
    }
}
const counter = new Counter(0);
counter.increment(); // 1 // increment : 증가하는 함수 (숫자가 호출되며 증가하게된다)
counter.increment(); // 2
console.log(counter.value);