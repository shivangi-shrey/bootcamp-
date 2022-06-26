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
/*let n = parseInt(readLine());
let arr = []
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()));
    //console.log(arr)
}
let max=0
for(let i=0;i<n;i++){
    if(arr[i]<=arr[i+1]){
        break;
    }
    if(i+1==max){
        console.log(arr[i] + " ")
    }
}**/

function leaderArray(arr,size){
    for(let i=0;i<size;i++){
        let j;
        for(j=i+1;j<size;j++){
            if(arr[i ]<=arr[j]){
                break;
            }
            if(j==size){

            }
        }
        //return (arr[i+1] + " ")
        
    }
}
let n = parseInt(readLine());
let arr = []
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()));
}
console.log(leaderArray(arr,n))
