let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
function sumOfDivisors(n){

  //Code here
  let sum =0 // assume sum = 0
  for(let i=1;i<=n;i++){ // i = 1  i=2 i=3
    if(n%i==0){         // 3%1==0 rem =0  quotient =3    3%2=rem = 1 so not execute next line   3%3=0 rem =0 Quotient = 1
        sum= sum+i  // 0+1=1  1 + 3 = 4
    }
  }
  return (sum); // 4
}
    

let n = parseInt(readLine());
console.log(sumOfDivisors(n));