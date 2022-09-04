// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// 망한 내 풀이 방식 ㅋ

// class Company {
//     constructor(name, money) {
//         this.name = name;
//         this.workTime (money) {
//             money = money * 180
//         }
//     }
//     partName() {
//         console.log('디자인과');
//     }
//     // workTime (money) {
//     //     money = money * 180;
//     // }
// }

// class fullTime extends Company {
//     constructor(name, money) {

//     }
// }

// class partTime extends Company {}

// const fullTime = new fullTime ('종서', 10000);

////////////////////////////////////////////////////////////

// 엘리 풀이 방식

class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    calculatepay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000; // 나중에 parttime 같이 8000이란 숫자만 써놓으면 어디로 전달 받는지 헷갈리기때문에 static을 이용해 작성해주면 좋다.
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
    }
}
class PartTimeEmployee extends Employee {
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, 8000)
    }
}

const jongseo = new FullTimeEmployee('종서', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
console.log(jongseo.calculatepay());
console.log(bob.calculatepay());