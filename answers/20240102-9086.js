// 문자열의 첫 글자와 마지막 글자를 출력
// console.log() 안에 적는 방법을 틀렸다 헤헤;

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const T = Number(input[0]);

for(let i=0; i < T; i++) {
    let firstChar = input[i+1].charAt(0);
    let lastChar = input[i+1].charAt(input[i+1].length - 1);
    console.log(firstChar + lastChar);
}