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
let n = parseInt(readLine()); //7
let arr = readLine().split(" ");//1 4 6 8 9 0 -34
for(let i=0;i<n;i++){
    //console.log(arr)
}
//console.log(arr)
let sum=0
for(let i=0;i<n;i++){
    if(i%2==0){  // 1+ 6+ 8 +0-34
        sum=sum+parseInt(arr[i])
    }
}
console.log(sum)  //-18