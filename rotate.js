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
let n = parseInt(readLine());
let arr =[]
function rotatearray(arr){
    for (let j=0;j<arr.length;j++){
        for(i=n-1;i>=0;i++){
            console.log((arr[i][j])+ " ");
        }
    }
}
rotatearray(arr)