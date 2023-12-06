const input = require("fs").readFileSync("/dev/stdin").toString().split(' ').map(c => +c);

const H = input[0];
const M = input[1];

if ( M < 45 ) {
	if ( H === 0 ) {
		console.log(H + 23, (60 - (45 - M)));
	} else {
        console.log(H - 1, (60 - (45 - M)));
    }
} else {
	console.log(H, (M - 45));
}

//틀린 답
const input2 = require("fs").readFileSync("/dev/stdin").toString().split(' ').map(c => +c);

const H2 = input[0];
const M2= input[1];

if ( M2 < 45 ) {
	if ( H2 === 0 ) {
		H2 = 24;
		console.log(H2 - 1, (60 - (45 - M2)));
	} else {
        console.log(H2 - 1, (60 - (45 - M2)));
    }
} else {
	console.log(H2, (M2 - 45));
}

// 고쳐야 할 부분: H의 값을 변경할 수 있도록 let으로 선언하고, 출력 부분을 조건문 밖으로 뺀다.
const input3 = require("fs").readFileSync("/dev/stdin").toString().split(' ').map(c => +c);

let H3 = input[0];
let M3 = input[1];

if (M3 < 45) {
    if (H3 === 0) {
        H3 = 24;
    }
    console.log(H3 - 1, (60 - (45 - M3)));
} else {
    console.log(H3, (M3 - 45));
}