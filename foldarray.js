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
let n = parseFloat(readLine());// number of element //6
let arr = []
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()));//
}
let m = parseInt(readLine());
let out = []
for(let i=0;i<m;i++){
    n=arr.length;
    let mid=Math.floor(n/2);
    for(let j=0;j<mid;j++){
        //console.log(arr[n-j-1])
        out.push(arr[j]+arr[n-j-1]);
                         // this represent for last character means  (6-1) last element 
                        // console.log(out)
    }
	if(n%2!=0){
		out.push(arr[mid]);
        //console.log(out)
	}
    arr=out;
    out=[]
}
console.log(arr.length);
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

