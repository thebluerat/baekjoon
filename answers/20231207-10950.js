const test = require("fs").readFileSync("/dev/stdin").toString().split('\n');

const T = test[0];

for(let i=1; i <= T; i++) {
    const AB = test[i].split(' ').map(c => +c);
    let A = AB[0];
    let B = AB[1];
    console.log(A + B);
}
