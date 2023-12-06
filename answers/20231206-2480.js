const dice = require("fs").readFileSync("/dev/stdin").toString().split(' ').map(c => +c);
const a = dice[0];
const b = dice[1];
const c = dice[2];
const min = Math.min(...dice);
const max = Math.max(...dice);

if (min == max) {
    console.log(10000 + 1000 * min);
} else if (a == b && b !== c || a !== b && b == c || c == a && a !== b) {
    if (a == b) {
        console.log(1000 + 100 * a);
    } else if (b == c) {
        console.log(1000 + 100 * c);
    } else {
        console.log(1000 + 100 * a);
    }
} else {
    console.log(100 * max);
}

//이미 걸러진 조건을 또 써서 아쉽다

