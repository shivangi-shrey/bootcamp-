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
let arr =[]
for(i=0;i<n;i++){
    arr.push(parseInt(readLine()));
   // console.log(arr)
}
let m = parseInt(readLine());
 let odd=[]
for (let i=0;i<m;i++){
   n = arr.length
  //console.log(m)
}
  let mid = Math.floor(n/2) //5/2
for(let j=0;j<mid;j++){ //j=0
   odd.push(arr[j]+arr[n-j-1]) //-1+1
}
if(n%2!=0){
    odd.push(arr[mid])
}
arr = odd
odd =[]

console.log(arr.length) //3
for(let i=0;i<arr.length;i++){
    console.log(arr[i]) //0
}