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
    arr.unshift(arr.pop())  // [2,1,3,5,10] unshift[10,2,1,3,5,10]  pop[10,2,1,3,5]
}
console.log(arr)
//for(let i=0;i<num.length;i++){
  //  let p = arr.splice(arr.length-1,1)  // [2,1,3,5,10]splice(5-1=4,1) p=10
 //   arr.unshift(p)
//}
//console.log(p)
//for(let i=0;i<arr.length;i++){
//}
//let fs = require("fs");
