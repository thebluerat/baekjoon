// 입력받은 단어의 길이를 출력하는 문제
// trim()을 사용하여 공백을 제거해야 정확한 결과가 나옴.

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(input.length);