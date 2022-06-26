let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = readLine().split(" ");//71 32 -53 71 71 -53
let count = 0
for(let i=0;i<n.length;i++ ){
    let goodpair = parseInt(n[i]) //71 32 -53 71 71 -53
    //console.log(goodpair)
    for(let j=i+1;j<n.length;j++){
        let k= parseInt(n[j])
       // console.log(k)
       if(goodpair===k){
            count=count+1
        }
    }
}
console.log(count);