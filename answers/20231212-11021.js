const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');
const T = parseInt(input[0]);

for(let i = 1; i <= T; i ++) {
    const ab = input[i].split(' ');
    let A = Number(ab[0]);
    let B = Number(ab[1]);
    console.log(`Case #${i}: ${A+B}`)
}