let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// let n = parseInt(readLine());
// let arr=[];
// for(let i=0;i<n;i++){
//     let row = readLine().split(" ");
//     arr.push(row);
//     //console.log(arr)
// }
// for(let i=0;i<arr.length;i++){
//     if(arr[i][i]<0){
//         arr[i][i]=0 
//     }
//     else{
//         arr[i][i]=1
//     }
// }
// for(let i=0;i<arr.length;i++){
//     console.log(...arr[i])
// }
let n = parseInt(readLine());
let arr = []
let ans =[]
for(let i=0;i<n;i++){
   let row = readLine().split(" ")
   arr.push(row)
} //console.log(arr)
for(let i=0;i<arr[0].length;i++){ // row
     //let temp =[]
  for(let j=0;j<arr.length;j++){ // column
    t=arr[i][j];
    arr[i][j]=arr[j][i];
    arr[j][i] =t;
   // temp.push(arr[j][i])
  }
  //ans.push(temp)
}
for(k=0;k<ans.length;k++){
console.log(...ans[k])
}


