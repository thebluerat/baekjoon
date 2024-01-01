// 받은 성적 중 최고점인 M으로 모든 점수를 조작하는 문제
// 모든 점수를 '점수 / M * 100으로 고친다

// Math.max() 안에 배열을 넣으면 배열을 그대로 반환해버리므로 전개해주어야 함
// score의 값이 0일 경우 간단하게 0으로 처리해줄 수 있음

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = Number(input[0]);
const score = input[1].split(' ').map(Number);
const M = Math.max(...score);
const fakeScore = score.map(item => (item === 0) ? 0 : item / M * 100);

let sum = 0;
fakeScore.forEach(number => {
    sum += number;
})

console.log(sum / N);