let fs = require("fs");
const { parse } = require("path");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n1 = parseInt(readLine());
let n2 = parseInt(readLine());
let x = n1^n2
let bits;
while(x>0){
	bits += x & 1
	x>>=1
}
console.log(bits)

