const input = require("fs").readFileSync(0).toString().split('\n');
//  0을 넣는 이유는 표준 파일 설명자 값이(standard input) 0이기 때문입니다! 별도의 파일('/dev/stdin')이 아닌 표준 입력을 받는 경우에는 0이라는 인자값을 넘겨줍니다
const x = input[0];
const y = input[1];

if (x > 0 && y > 0) {
    console.log(1);
} else if (x < 0 && y > 0) {
    console.log(2);
} else if (x < 0 && y < 0) {
    console.log(3);
} else {
	console.log(4);
}