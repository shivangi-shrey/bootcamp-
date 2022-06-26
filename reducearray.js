let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine());//5
//console.log(n)
let arr = []
for (let i=0;i<n;i++){
arr.push(parseInt(readLine()));[1,2,-1,5,10]
//console.log(arr)
}
let sum = 0
let sub = 0
for (let i=0;i<n-1;i++){ //i= 0
    sum= arr[i]+arr[i+1] //sum = 1+2=3
    //console.log(sum)
    sub = sum - arr[i+1] // sub =3-
    //console.log(sub)
}
//console.log(sub)
console.log(sum)