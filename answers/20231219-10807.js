const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const N = input[0];
const nominee = input[1].split(' ');
const v = input[2];
let i = 0;
let winner = [];

while(i < N) {
    if(v == nominee[i]) {
        winner.push(winner);
    }
    i++;
}
console.log(winner.length);