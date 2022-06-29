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
let ans =[]
for(let i=0;i<n;i++){
   let row = readLine().split(" ")
   arr.push(row)
} //console.log(arr)
for(let i=0;i<arr[0].length;i++){ // row
     let temp =[]
     //console.log(temp)
  for(let j=0;j<arr.length;j++){ // column
    temp.push(arr[j][i])

  }
  ans.push(temp)
  
}
for(k=0;k<ans.length;k++){
console.log(...ans[k])
}
// let m=parseInt(readLine());
// let arr=[];
// for(let i=0;i<m;i++){
//   arr[i]=readLine().split(" ");
//  // console.log(arr[i])
// }
// let ans=[];
// for(let columnCount=0;columnCount<arr.length+1;columnCount++){
//   let tempArray=[];
//     for(let j=0;j<m;j++){
//         tempArray.push(arr[j][columnCount]);
//     }
//     ans.push(tempArray);
// }
// for (let i=0;i<ans.length;i++){
// console.log(...ans[i]);
// }


