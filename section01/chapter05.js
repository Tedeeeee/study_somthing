// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// 모듈러 연산
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// 흔히 아는 값이 아닌 다른 값
let inf = Infinity;
let mInf = -Infinity;

// 수치 연산 실패 시 나오는 연산 결과
let nan = NaN;
console.log(1 * "hello");

// 2. String Type
let myName = "윤태식";
console.log(myName);

// 자바스크립트는 문자열 연산을 지원한다
let myLocation = " 대전";
let introduce = myName + myLocation;
console.log(introduce);

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주 중입니다`;
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type -> 아무것도 없다
let empty = null;

// 5. undefined Type
let none;
console.log(none);
