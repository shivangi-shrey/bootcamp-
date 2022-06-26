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
let Sumofalloddelements = arr =>{
    let sum =0
    for (let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i]%2!=0){
                sum=sum+arr[i]
            }
        }
    
        
    }
    return sum;
}
console.log(Sumofalloddelements)