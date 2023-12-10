const N = Number(require("fs").readFileSync("/dev/stdin").toString());

long = N / 4;
let i = 0;

let type = '';

while(i < long) {
    type += 'long '
    i++;
}

console.log(type + 'int');