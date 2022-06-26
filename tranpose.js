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
     console.log(temp)
  for(let j=0;j<arr.length;j++){ // column
    //t=arr[i][j];
    //arr[i][j]=arr[j][i];
    //arr[j][i] =t;
    temp.push(arr[j][i])

  }
  ans.push(temp)
  
}
for(k=0;k<ans.length;k++){
console.log(...ans[k])
}