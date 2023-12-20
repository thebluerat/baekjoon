const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(c => +c);
let i = 0;
let max = 1;
let maxNumberIndex;

for(i = 0; i < 9; i++) {
    if(input[i] > max) {
        max = input[i];
        maxNumberIndex = i + 1;
    } 
}
console.log(max);
console.log(maxNumberIndex);