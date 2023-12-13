const N = Number(require("fs").readFileSync("/dev/stdin").toString());
for(let i = 1; i <= N; i ++) {
   let blank = ' '.repeat(N - i);
   let stars = '*'.repeat(i);
   console.log(blank + stars)
}