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
function calculateNthRow(n){
    if(n===1){
        return [1];
    }
    else if (n===2){
        return [1,1]
    }
///n>2
prev =[1,1] //prev=[1,1,] n=3
curr = [];
for (let rowIndex=3; rowIndex<=n;rowIndex++){
    //for3th row(1st row iteration);(3-2=1)
    curr= [1];
    for (let i=1;i<=rowIndex-2;i++){
        curr[i] = prev[i]+prev[i-1];
     }
     curr.push(1) // last value is again 1
     prev =curr;//prev =[1,2,1]
}
   return curr ;
}
let N = parseInt(readLine());
let nthRow = calculateNthRow(N);
for(let i=0;i<nthRow.length;i++){
    console.log(nthRow[i]);
}

