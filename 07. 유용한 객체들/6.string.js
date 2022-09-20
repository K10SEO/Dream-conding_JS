const textObj =  new String('hello World!'); // 객체 타임
const text = 'Hello World!'; // 원시 타입
console.log(textObj);
console.log(text);
console.log(text.length);// 12 // 문자열의 길이가 총 몇개 인지 볼수 있음

console.log(text[0]); // h
console.log(text[1]); // e // 배열의 인덱스로 접근
console.log(text[2]); // l
console.log(text.charAt(0)); // h
console.log(text.charAt(1)); // e // 함수로 접근
console.log(text.charAt(2)); // l

console.log(text.indexOf('l')); // 2 // 어떤 문자열이 몇번째 인덱스에 있는지 확인 할 수 있음
console.log(text.lastIndexOf('l')); // 9 // 어떤 문자열이 뒤에서 몇번째 인덱스에 있는지 확인 할 수 있음

console.log(text.includes('tx')); // false // 해당하는 문자열에 포함 하는지 안하는지 확인 할수 있음
console.log(text.includes('h')); // false // 대소문자를 구분함
console.log(text.includes('H')); // true // 대소문자를 구분함

console.log(text.startsWith('H')); // true // 특정한 문자로 시작하는지 안하는지 확인 할수 있음
console.log(text.endsWith('!')); // true // 특정한 문자로 끝나는지 안하는지 확인 할수 있음

console.log(text.toUpperCase()); // 특정한 문자열 전체가 대문자로 변환된 새로운 문자열이 반환 된다
console.log(text.toLowerCase()); // 특정한 문자열 전체가 소문자로 변환된 새로운 문자열이 반환 된다

console.log(text.substring(0, 2)); // He // 특정한 문자열을 가져와 출력해준다 (0 ~ 2 인덱스를 출력)
console.log(text.slice(2)); // llo World! // 잘라낸 후 그 뒷부분을 출력해준다(2 인덱스까지 잘라내어 3부터 출력을 해준다)
console.log(text.slice(-2)); // d! // - 를 해주면 뒤에서 부터 2번째 있는것을 남기고 잘라낸다

const space = '      space      '
console.log(space.trim()); // 공백을 다 제거하고 문자열만 남겨준다

const longText = 'Get to the point';
console.log(longText.split(' ')); // ['Get', 'to', 'the', 'point'] // 스패이스를 지정해주면 스패이스 별로 끊어서 배열로 반환해준다
console.log(longText.split(' ', 2)); // 배열로 반환 된것중 2개만 출력 해줌
// 지정한대로 끊어서 배열로 반환 시켜줌
