// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = "hello";
text = "hi"; // 이렇게 재할당 할수 없다. (nodemon을 해보면 에러가 나는것을 볼수 있다)

// 1. 상수
const MAX_FRUITS = 5; // 상수 사용 할때는 항상 대문자로 단어와 단어사이에는 ( _ ) 로 분리를 해주어야한다.

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  // object를 한번 할당을 하면
  name: "apple",
  color: "red",
  display: "사과",
};
//apple = {}; // 이렇게 다른 object로 할당이 되지 않는데
console.log(apple);
/* 한번 할당하고 다시 재할당이 필요로 하지 않은 곳이 라면 let 보단 const 키워드를 쓰는게 좋다.
(프로그래밍을 할때 let 보다는 const를 더 선호하는게 좋다고한다.)
*/
apple.name = "orange"; // const가 담고 있는 apple 이라는 메모리는 재할당 할수 없지만 (apple을 다른 object로 할당 할수 없지만)
apple.display = "그린애플"; //이렇게 apple이 가지고 있는 주소가 담긴 메모리에 값은 변경 할수 있다.(apple(object)안에 키워드들의 값은 변경이 가능하다.)
