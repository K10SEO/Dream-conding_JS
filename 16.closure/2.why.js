// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase; // increase 함수 자체를 리턴 반환 시켜준다
}

const a = makeCounter(); // 반환된 increase 함수를 a 에 넣어주게됨
a(); // makeCounter 메모리값을 참조 하여 increase를 실행 시켜줌

// 근데 여기서 궁금한점
// 1. 그럼 makeCounter 를 실행 했을 때도 increase 실행 되야 하는거 아닌가? 왜 실행되지 않지?
// increase 함수의 코드를 return으로 바꿔주고 결과값을 받아보면 값이 출력되는것을 확인 할 수 있다.

class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
