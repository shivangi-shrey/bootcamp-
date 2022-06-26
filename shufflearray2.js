let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine());
 let arr = []
 //let ans = []
for (let i=0;i<2*n;i++){
    arr.push(parseInt(readLine()))
    //console.log(arr)

}
for(let i=0;i<n;i++){
    let x= (arr[i])
    console.log(x)
    let y = (arr[i+n])
    console.log(y)
}
//console.log(...ans)
