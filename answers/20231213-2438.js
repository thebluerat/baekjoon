const N = Number(require("fs").readFileSync("/dev/stdin").toString());
let j = 1
for(let i = 1; i <= N; i ++) {
   let stars = '';
   for(let j = 1; j <= i; j++) {
    stars += '*';
   }
   console.log(stars);
}