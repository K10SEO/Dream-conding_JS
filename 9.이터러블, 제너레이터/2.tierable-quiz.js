// [Symbol.iterator](): IterableIterator<T>;
// 0부터 10이하까지 숫자의 2배를 순회 하는 이터레이터(반복자) 만들기
const multiple = {
    [Symbol.iterator]: () => { // iterable 이 되기 위해서는 [Symbol.iterator] 메서드가 존재해야함
        // [Symbol.iterator] 메서드는 iterator 객체가 반환 되어야 한다
        const max = 10;
        let num = 0;
        return { // tierator 객체가 되기 위해서는 객체내에 next 메서드가 존재해야 한다
            next() {
                return { value:  num++ * 2, done: num > max }; // done 값이 true 가 될때까지 반복 수행 한다 value는 반복수행 하며 반환하는 값이다
            }, // num에 증가 연산자를 붙여 num이 10 보다 커지면 출력이 멈추도록 해준다
        };
    },
};

console.clear();
for(const num of multiple) {
    console.log(num);
}