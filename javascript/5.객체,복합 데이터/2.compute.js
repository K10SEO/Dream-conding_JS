const obj = {
    name: '종서',
    age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대광호 표기법 사용!
function getValue(obj, key) {
    return obj[key]; // key라는건 정해져 있지 않고 매개변수인데 전달되는 문자열에 따라서 키에 값을 찾는다
} // 속성에 key 라는 값이 있으면 return obj.key 으로 접근할 수 있지만  값이 없으면 []를 이용하여 전달된 키를 접근할수 있도록 만들어주어야 한다
console.log(getValue(obj, 'name')); 
// 겟밸류를 호출할때 obj를 전달하고 접근하고 싶은 키에 이름은 name로 전달하면 name이라는 키에 값을 리턴하는것을 볼수 있다

function addKey(obj, key, value) { // 오브젝트에 추가할 수 도 있다
    obj[key] = value;
}
addKey(obj,'job', 'engineer') // 출력을 해보면 job: 'engineer' 가 추가된것을 볼수 있다
console.log(obj);

function deleteKey(obj, key) { // 오브젝트에서 삭제 할 수 도 있다
    delete object[key];
}