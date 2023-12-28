const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

let result = Array(N).fill(0);

for(let i=1; i <= M; i++) {
    const [startIndex, endIndex, ballNumber] = input[i].split(' ').map(Number);

    for(let j=startIndex; j<=endIndex; j++) {
        result[j-1] = ballNumber;
    }
}
console.log(result.join(' '));