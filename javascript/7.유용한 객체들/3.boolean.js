// Boolean
const isTrue = true //new Boolean(true); 뉴 블리언으로 작성해도 되지만 메모리 객체만 더 차지하는거기때문에 트루로만 작성해주자
console.log(isTrue.valueOf());  // true // valueOf : boolean의 value 가 나올수 있게 도와주는것

// 중요!
//false
/**
 * Falshy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * '' // 텅빈 문자열 false
 */

//true
/**
 * 1
 * -1
 * '0' // 문자열 안에 값이 있어서 true
 * 'false' // 문자열 안에 있어서 true
 * []
 * {}
 */