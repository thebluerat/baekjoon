const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');
let i = 0;

while(i < input.length) {
    const ab = input[i].split(' ');
    let A = Number(ab[0]);
    let B = Number(ab[1]);
    if(A + B > 1) {
        console.log(A + B);    
    }
    i++;
}