const receipt = require("fs").readFileSync("/dev/stdin").toString().split('\n');

const X = Number(receipt[0]);
const N = Number(receipt[1]);
let i = 2;
let sumCorrect = 0;

while(i < N+2) {
    const ab = receipt[i].split(' ').map(c => +c);
    let a = ab[0];
    let b = ab[1];
    let price = a * b;
    sumCorrect = price + sumCorrect;
    i ++;
}
if (sumCorrect == X) {
    console.log('Yes');
} else {
    console.log('No');
}