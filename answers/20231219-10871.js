const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const N = input[0].split(' ')[0];
const X = input[0].split(' ')[1];

const nominee = input[1].split(' ');
let winners = [];
let i = 0

while(i < nominee.length) {
    if(parseInt(nominee[i]) < X) {
        winners.push(nominee[i]);
    }
    i++;
}
console.log(winners.join(' '));