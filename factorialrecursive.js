let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
function factorial(number){
  // write your code here
  if(number==0){
    return "1";
  }
  else if(number<0){
    return "undefine"
  }
  else{
    return (number*factorial(number-1))
  }
  
  }
  
  let number = parseInt(readLine());
  
  console.log(factorial(number));