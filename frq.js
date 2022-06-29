let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let N = readLine().split(" ")
let k = readLine().split(" ")
let count = 0
let a = parseInt(N[0])
let b = parseInt(N[1])
for(let i=0;i<a;i++){
    let c= parseInt(k[i])
    if(c==b)
    count++
}
console.log(count)