let n =[1,2,3]
let arr =[]
let sum = 0
let rev = 0
let k=0
for(let i=0;i<n.length;i++){
 sum= sum*10+n[i]
} //console.log(sum)
while(sum!=0){
let d = parseInt(sum%10)
rev = rev*10+d
sum = parseInt(sum/10);
} 
while(rev!=0){
  k = k*10+rev
  console.log(k)
}
arr.push(k)
console.log(arr)
n.reverse();
console.log(n)
