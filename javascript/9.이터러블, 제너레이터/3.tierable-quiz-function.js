// [Symbol.iterator](): IterableIterator<T>;
// 0부터 10이하까지 숫자의 2배를 순회 하는 이터레이터(반복자) 만들기
// 외부로 부터 주입되어 재사용성을 높일 수 있다
function makeIterable(initialValue, maxValue, callback) { // 함수를 호츨하면 오브젝트를 리턴 하도록 만듬, 함수에 값을 지정 할 수가 있다
    return {
     [Symbol.iterator]: () => {
            const max = maxValue;
            let num = initialValue;
            return {
                next() {
                    return { value: callback(num++), done: num > max };
                },
            };
        },
    };
}

const multiple = makeIterable(0, 20, (num) => num * 2); // max, unm, callback 함수를 외부에서 지정해주므로 재사용성이 좋아짐

console.clear();
for(const num of multiple) {
    console.log(num);
}