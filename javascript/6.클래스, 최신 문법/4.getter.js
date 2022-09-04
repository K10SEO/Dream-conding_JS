// 접근자 프로퍼티 (Accessor Property)
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        //this.fullName = `${this.firstName} ${this.lastName}`;
    }
    get fullName () { // 원하는 함수앞에 get을 붙여주면 접근자 프로퍼티로 사용가능 하다
        return `${this.firstName} ${this.lastName}`; // 풀네임에 접근할때마다 업데이트 되고 싶다면 함수를 써야한다
    }

    set fullName(value) { // set은 할당을 할때 호출 됨
        console.log(value);
    } 
}

const student = new Student('수지', '김');
student.firstName = '안나' // firstName 은 안나 지만 fullName은 아직도 김수지인것을 볼 수 있 왜냐면 생성자에서 한번 만들어지고나면 업데이트 되지 않는다
console.log(student.firstName);
console.log(student.fullName); //student.fullName() 함수 호출 방식 말고 속성같이 호출하고싶다 할때 (get)접근자 프로퍼티를 써야한다
// 원하는 함수앞에 get이라는것을 붙여주면 된다.
student.fullName = '김철수'; // 김철수를 풀네임에 할당하여 셋 함수가 호출 됨 