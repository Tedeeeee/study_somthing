// 1. 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환을 돕는것
let num = 10;
let str = "20";

// string 타입인 str이 함꼐 있기 때문에 num이 string으로 변환되면서 문자열을 합치는 것으로 변환
const result = num + str;
console.log(result);

// 2. 명시적 형변환
// 프로그래머 내장 함수 등을 이용해서 직접 형 변환을 명시
let str1 = 10;
let strToNum1 = Number(str1);
console.log(str1 + strToNum1);

let str2 = "101개1";
let strToNum2 = parseInt(str2);
console.log(strToNum2);

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(`${typeof numToStr1}인 ${numToStr1}`);