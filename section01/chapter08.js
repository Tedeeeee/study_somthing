// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null , undefined 가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;
// null 병합 연산자
let var4 = var1 ?? var2;
console.log(var4);

let var5 = var1 ?? var3;
console.log(var5);

for (let i = 0; i < 10; i++) {
    console.log("문제가 있네")
}