let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = readLine().split(" ")
let row = n[0]
let column  = n[1]
let matrix = []
//console.log(n)
for(let i=0;i<row;i++){
    matrix.push(readLine().split(" "));
    //console.log(matrix)
}
let sum=0
for(j=0;j<matrix.length;j++){
    for(k=0;k<matrix[0].length;k++){
        if(matrix[j][k]%2!=0){
            sum=sum+parseInt(matrix[j][k])
        }
    }
}
console.log(sum)