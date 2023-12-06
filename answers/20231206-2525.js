const time = require("fs").readFileSync("/dev/stdin").toString().replace('\n',' ').split(' ').map(c => +c);
const A = time[0];
const B = time[1];
const C = time[2];
const M = Math.floor((B + C)/60);

console.log((A+M)%24 + ' ' + (B+C)%60);