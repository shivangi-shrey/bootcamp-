let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is store
let n = readLine().split(" ");//[2 1 3 4 5 10]
let num=parseInt(readLine()); //1
let arr=[];
for (let i=0;i<n.length;i++){
    arr.push(parseInt((n[i])));//[2,1,3,5,10]
    //console.log(arr)
    //console.log(num)
}
for(let i=0;i<num;i++){
  push.unshift(push.pop())
}
for(let i=0;i<arr.length;i++){
console.log(arr[i])
}














 function RotateArrayClockwise(arr,num){
  for(let i=0;i<num.length;i++){
     arr.unshift(arr.pop())
  }
  return (arr);
 }
 console.log( RotateArrayClockwise(arr,num))

 