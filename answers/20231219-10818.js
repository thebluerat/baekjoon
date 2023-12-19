const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const N = parseInt(input[0])
const nominee = input[1].split(' ').map(Number);

nominee.sort((a, b) => a - b);
const max = nominee[N - 1];
const min = nominee[0];
console.log(min, max);