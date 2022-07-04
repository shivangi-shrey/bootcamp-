let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine());
let even =0
let odd = 0
for(let i=0;i<n;i++){
	let a = parseInt(readLine())
    if(a%2==0){
       // console.log(a)
        even++
    }
    else{
        odd++;
    }
}
console.log(odd)
console.log(even)