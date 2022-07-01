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
let arr=[];
for(let i=0;i<n;i++){
    let row = readLine().split(" ");
    arr.push(row);
    //console.log(arr)
}
for(let i=0;i<arr.length;i++){
    if(arr[i][i]<0){
        arr[i][i]=0 
    }
    else{
        arr[i][i]=1
    }
}
for(let i=0;i<arr.length;i++){
    console.log(...arr[i])
}