let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = readLine().split(" ");
let row = n[0];
let column = n[1];
let matrix=[];
for(let i=0;i<row;i++){
    matrix.push(readLine().split(" "));
    //console.log(matrix)
}
let sum=0;
for(let j=0;j<matrix.length;j++){
    for(let k=0;k<matrix[0].length;k++){
        if(matrix[j][k]%2!=0){
           // console.log(matrix[j][k])
            sum=sum+parseInt(matrix[j][k])
        }
    }
}
console.log(sum)