const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

let reversedInput = Array.from({length: N}, (number, index) => index + 1);
for(let k=1; k <= M; k++) {
    let [i, j] = input[k].split(' ').map(Number);
    while(i < j) {
        let temp = reversedInput[i - 1];
        reversedInput[i - 1] = reversedInput[j - 1];
        reversedInput[j - 1] = temp;
        i++;
        j--;
    }
}
console.log(reversedInput.join(' '));