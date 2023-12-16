const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let i = 0;

while(i < input.length) {
    let ab = input[i].split(' ');
    console.log(Number(ab[0]) + Number(ab[1]));    
    i++;
}