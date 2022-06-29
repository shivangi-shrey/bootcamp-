// let n =[1,2,3]
// let arr =[]
// let sum = 0
// let rev = 0
// let k=0
// for(let i=0;i<n.length;i++){
//  sum= sum*10+n[i]
// } //console.log(sum)
// while(sum!=0){
// let d = parseInt(sum%10)
// rev = rev*10+d
// sum = parseInt(sum/10);
// } 
// while(rev!=0){
//   k = k*10+rev
//   console.log(k)
// }
// arr.push(k)
// console.log(arr)
// n.reverse();
// console.log(n)
//  let  n = [1,2,4,5,6,7,8,9]
//  let even= []
//  let odd =[]
//  for (let i=0;i<n.length;i++){
//   if(n[i]%2==0){
//     even.push(n[i]);
//   }
//   else{
//     odd.push(n[i])
//   }
//  }
//  console.log(even)
//  console.log(odd)
 
function reverseInteger(n){
  let rev=0
  for(let i=0;i<n;i++){
  //while(n>0){
   let d = parseInt(n%10) //123%10=3 12%10=2
    rev= rev*10+d //rev=0  0*10+3 rev=3 , 3*10+2=32
    n=parseInt(n/10)//123/10=12 
  }
  console.log(rev)

}
let n = 1234
reverseInteger(n)

