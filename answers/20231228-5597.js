const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

input.sort(function(a, b) {
    return a - b;
})

let i = 0;
while(input[i] == i+1) {
        i++;
}
console.log(i+1);

let j = i+1;
while(input[j] == j+2) {
    j++;
};
console.log(j+2);