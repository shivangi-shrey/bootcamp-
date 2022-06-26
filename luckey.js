let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function findLuckyNumber(nums){
  // implement this function
    let count = 1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
            count++
        } else {
            if(count == nums[i-1]){
                return nums[i-1];
            }
            count = 1;
            
        }
    }
    if(count==nums[nums.length-1]){
        return nums[nums.length-1];
    } return-1;

}
// DO NOT change anything below this line
let numElems = parseInt(readLine());
let inputArr = [];
for(let index=0;index<numElems;index++){
  inputArr.push(parseInt(readLine()));
}
console.log(findLuckyNumber(inputArr));