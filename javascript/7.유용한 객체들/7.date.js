// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 새로운 Date를 만들면 현재시간이 출력된다
console.log(new Date('jun 5, 2022')); // 날짜만 지정
console.log(new Date('2022-12-17T03:24:00')); // 시간까지 지정

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00')); // 밀리초 단위로 표현 할수 있다

const now = new Date();
now.setFullYear(2023); // 인스턴스레벨의 함수를 사용 할수 있다 // 연도 설정
now.setMonth(10); // setMonth 는 0 부터 시작 인덱스와 같다(0 : 1월, 1 : 2월)
console.log(now.getFullYear()); // 연도를 받아올 수 있다
console.log(now.getDate()); // 0 부터 인덱스 시작 0: 1
console.log(now.getDay()); // 요일을 받아올수 있음 (0 부터, 0: 일요일)
// get.Hours(시), Minutes(분), Seconds(초), Time(시간 전체) 등등을 가져올 수 있다
console.log(now);

console.log(now.toString()); // 전체적인 날짜와 시간까지 볼 수 있다
console.log(now.toDateString()); // 날짜만 가져올 수 있다 
console.log(now.toTimeString()); // 시간만 가져올 수 있다  
console.log(now.toISOString()); // ISO 8601 형식으로 가져올 수 있다 
console.log(now.toLocaleString('en-US')); // 미국 형식으로 가져올 수 있다 
console.log(now.toLocaleString('ko-KR')); // 한국 형식으로 가져올 수 있다 