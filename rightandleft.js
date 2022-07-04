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
function  rightToLeftDiagonal(matrix){
    let ans=[]
    for(let i=0;i<matrix.length;i++){
        let t=matrix[i][matrix.length-1-i]
       ans.push(t)
    }
    return ans;

}


// Do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let row = 0; row < m; row++) {
  let rowElements = readLine().split(" ");
  matrix.push(rowElements);
  //console.log(matrix)
}
let result = rightToLeftDiagonal(matrix);
for (element of result) {
  console.log(element);
}