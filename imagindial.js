let fs = require("fs");
const { readdir } = require("fs/promises");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
//console.log(n)

let max = parseInt(readLine());
//console.log(max)

let m = parseInt(readLine());
let arr = []
let ans =0
for (let i=0;i<m;i++){
    //console.log(m)
    arr.push(parseInt(readLine()));
    //console.log(arr)
   if(arr[i]==max){
    ans = arr[0];
    break;
   }
}
console.log(ans)
