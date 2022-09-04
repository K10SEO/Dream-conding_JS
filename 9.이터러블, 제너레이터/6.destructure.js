// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = ['🍎', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits; // fruits 의 구조가 분해 되어 first는 사과 second는 키위 others는 나머지 과일들
console.log(fruits[0]);
console.log(first); // 인덱스로 출력 하지 않아도 된다
console.log(second);
console.log(others); // 나머지 과일들이 배열로 출력

const point = [1, 2];
const [x, y, z = 0] = point; // 구조분해를 사용 하면 x, y 값을 쉽게 바꿀수도 있고 지정된 값이 없는 z에 값도 만들수 있다
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
    return ['apple', '🍎'];
}
const array = createEmoji(); // 리턴된 애플과 이모지를 출력
console.log(array);

const [title, emoji] = createEmoji(); // 구조 분해를 사용 하여 위와 같이 출력 할 수 있다
console.log(title);
console.log(emoji);

const jongseo = {name: 'Jongseo', age: 25, job: 's/w engineer'};
function display(name, age, job) { // 선언된 jongseo obj를 받아 오는것 보다 키를 받아오는것이 더 간결하게 작성 가능
    console.log('이름',name);
    console.log('나이',age);
    console.log('직업',job);
}
display(jongseo)

const {name, age, job: occupation, pet = '딱지'} = jongseo; // job의 이름을 바꿀수도 있다 새로운 키도 쓸수 있다
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz - 처음으로 구글링 해서 푼 문제 ㅋ
const prop = {
    name: 'Button',
    styles: {
        size:20,
        color: 'black',
    },
};

function changeColor({styles: { color }}) {
    console.log(color);
}
changeColor(prop);