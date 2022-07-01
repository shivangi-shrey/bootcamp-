
function hammingdistance(n1,n2){
    let x = n1 ^ n2;
    let bits = 0;
    while(x>0){
        bits +=  x & 1
        console.log(bits)
        x>>=1

    }
    return bits;
}
let n1 = 1 ,n2=4

console.log(hammingdistance(n1,n2))