const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(c => +c);

const remainder = input.map(function(item) {
    return item % 42;
});

const uniqueRemainder = [...new Set(remainder)];
console.log(uniqueRemainder.length);