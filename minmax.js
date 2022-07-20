let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


// ## This function should return single integer. The integer should be maximum value of input list
// ## Please fill the following function
function maximumValue(inputNumbers){
    // write below this here
    inputNumbers = Math.max(...list2);
    return inputNumbers;
}
    


// ## This function should return single integer. 
// ## The integer should be minimum value of input list
function minimumValue(inputNumbers){
    // Please write below this
    return Math.min(...list1);
}


// ## This function should return list of integer which lies between m1 and m2. 
// ## if m1 <= m2 return list of numbers between m1 and m2
// ## if m2 <= m1 return list of numbers between m2 and m1
// ## If no such numbers exist in the input list between m1 and m2 return a list with -1 i.e [-1]
function getNumbersInRange(inputNumbers, m1, m2){
    // Please write below this line
    if(m1>m2){
        let temp = m1
        m1=m2
        m2=temp;
    }
    inputNumbers=[-1]
    for(let i=0;i<list3.length;i++){
        if(m1<=list3[i]&&m2>=list3[i]){
            inputNumbers.push(list3[i])
        }
    }
    if(inputNumbers.length>1){
        inputNumbers.shift();
    }
    return inputNumbers;
}





//  Please do not change anything below this line.
function ConvertToNumber(list){
  for(let each in list){
    list[each]=Number(list[each]);
  }
  return list;
}

let list1 = readLine().split(" ");
let list2 = readLine().split(" ");
let list3 = readLine().split(" ") ;  
ConvertToNumber(list1);
ConvertToNumber(list2);
ConvertToNumber(list3);
let m1 = minimumValue(list1);
let m2 = maximumValue(list2);
let minMaxRange = getNumbersInRange(list3, m1, m2);
console.log(...minMaxRange);