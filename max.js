let arr= [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 0, 5, 3]];
let Sumofalloddelements = arr =>{
    let sum =0;
    for (let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i]%2!=0){
                sum=sum+arr[i]
            }
        }
    
        
    }
    return sum;
}
console.log(Sumofalloddelements)