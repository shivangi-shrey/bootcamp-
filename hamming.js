function hammingdistance(n1,n2){
    let x = n1^n2;
    let bits = 0;
    while(x>0){
        bits=bits+x&1

    }
    return bits;
}
console.log(hammingdistance)
let n1= 0001
let n2 = 0101