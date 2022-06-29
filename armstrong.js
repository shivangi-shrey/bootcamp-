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
let sum = 0
let temp = n
for(let i=0;i<=temp;i++){
//while(n>0){
    let d = parseInt(n%10)
    sum=sum+d*d*d
    n = parseInt(n/10)
    //console.log(sum)
}
    if(sum==temp){
    console.log(true)
    }
    else{
        console.log("false")
    }

