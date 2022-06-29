let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as rightToLeftDiagonal
// function rightToLeftDiagonal(arr){
//     let ans = []//empty array
//     let col= arr[0].length-1;
//     for(let row=0;row<arr.length;row++){
//         ans.push(arr[row][col-row]);
//     }
//     return ans;
// }



// // Do not change anything below this line
// let m = parseInt(readLine());
// let matrix = [];
// for (let row = 0; row < m; row++) {
//   let rowElements = readLine().split(" ");
//   matrix.push(rowElements);
// }
// let result = rightToLeftDiagonal(matrix);
// for (element of result) {
//   console.log(element);
// }
let n= parseInt(readLine());
let arr =[]
for(let i =0;i<n;i++){
  arr[i]=readLine().split(" ")
  //console.log(arr[i])
}
for(let i=0;i<arr.length;i++){
  let t = arr[i][i] +  arr[i][arr.length-1-i]
  console.log(t)
  //let k = arr[i][arr.length-1-i]
  //console.log(k)
}