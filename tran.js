let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// // -------- Do NOT edit anything above this line ----------
 let n = parseInt(readLine())
 for(let i=0;i<n;i++){
   let k = parseInt(readLine())
   let person = readLine()
   //console.log(person)
   findseat(k,person)
 }

function findseat(k,person){
    if( k>=60 && person=="M"){
      console.log("eligible")
        
    }
    else if (k>58&&person=="F"){
      console.log("eligible")
    }
    else if (k>34&&person=="T"){
      console.log("eligible")
    }
    else{
      console.log("not eligible")
    }
}
 
