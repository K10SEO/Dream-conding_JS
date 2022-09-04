// Set
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size); // 3

// set 안에 아이템이 '존재 하는지 확인'
console.log(set.has(2)); //true 
console.log(set.has(6));  // false

// 순회 (set은 Iterable 하기 때문에 순회 가능)
set.forEach((item) => console.log(item));
for(const value of set.values()) {
    console.log(value);
}

// 추가
set.add(6);
console.log(set); // 6이 추가 되어 { 1, 2, 3, 6 } 출력 됨
set.add(6)
console.log(set); // 6이 있는데 추가를 하면 무시된다 중복되지 않는다

// 삭제
set.delete(6);
console.log(set); // set에 6이 삭제 되어 출력

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name:'🍎', price: 8 };
const obj2 = { name:'🍌', price: 5 };
const objs = new Set([obj1,obj2]);
console.log(objs); // set에 사이즈가 2개가 출력되고 각각 2개의 객체가 출력되는걸 볼 수 있다.

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs);