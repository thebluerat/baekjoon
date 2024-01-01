// 단어와 정수가 주어졌을 때 정수 i번째의 글자를 출력한다.
// charAt() 함수는 전달된 파라미터의 index에 위치한 글자를 return한다.

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const word = input[0];
const i = input[1];

console.log(word.charAt(i - 1));