// 함수 선언
function greeting () {
    console.log("안녕하세요")
}
greeting();

// 함수 표현식
function funcA() {
    console.log("funcA");
}

// 익명함수이다
// 익명 함수는 호이스팅 되지않는다
let varB = function () {
    console.log("varB");
}

varB();

// 화살표 함수
let varC = (value) => value + 1;


console.log(varC(10));