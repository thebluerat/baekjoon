const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

let result = Array(N).fill().map((item, i) => {
    return i+1;
});

for(let j=1; j <= M; j++) {
    const [firstBasket, secondBasket] = input[j].split(' ').map(Number);
    [result[firstBasket - 1], result[secondBasket - 1]] = [result[secondBasket - 1], result[firstBasket - 1]]
}
console.log(result.join(' '));