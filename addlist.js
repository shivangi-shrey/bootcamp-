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
for(let i=0;i<n;i++){
  let num1 = readLine().split(" ");
  let num2 = readLine().split(" ");
  //console.log(num1)
  //console.log(num2)
  let res = " ", min=0;
  let i=0,j=0;
  while(i<num1.length||j<num2.length){
    let sum=0;
    if(i<num1.length){
      sum=sum+parseInt(num1[i]);
    }
    if (j<num2.length){
      sum=sum+parseInt(num2[j])
    }
    sum=sum+ min;
    res=res+(sum%10);
    i++;
    j++;

  }
  if (min>0){
    res= res+min;
  }
  console.log(res);
}

