// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서는 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
// 배열에 들어간 오브젝트는 새롭게 만들어진 오브젝트가 아닌 기존 만들어놓은 오브젝트 메모리주소가 배열에 전달되는것이다
const pizza = { name: '🍕', price: 2};
const ramen = { name: '🍜', price: 3};
const sushi = { name: '🍣', price: 1};
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);
