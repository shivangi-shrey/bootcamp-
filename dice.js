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
let n = parseInt(readLine());
let arr =[]
for(let i=0;i<n;i++){
  
 let k= readLine().split(" ");
 arr.push(k)
 console.log(k)
}

let max= -999999999
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
    arr[i]=max
    }
}
  // console.log([i])
