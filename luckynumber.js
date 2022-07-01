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
let arr =[]
let count = 1
for(let i=0;i<n;i++){
 //let m = parseInt(readLine());
 arr.push(parseInt(readLine()));
 console.log(arr)
 
} 
for(let i=0;i<arr.length;i++){
  if(arr[i]==arr[i-1]){
    count++;
  }
  else if(count==arr[i-1]){
   console.log(arr[i-1])
  
  count=1
  }

}
if(count==arr[arr.length-1]){
    console.log (arr[arr.length-1]);
}
else{
    console.log("-1")
}
//console.log(count)


    
