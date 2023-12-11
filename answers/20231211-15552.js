const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');
const T = parseInt(input[0]);
let sum = [];


for(let i = 1; i <= T; i ++) {
    const ab = input[i].split(' ');
    let A = Number(ab[0]);
    let B = Number(ab[1]);
    sum.push(A + B);
}
const answer = sum.join('\n');
console.log(answer);