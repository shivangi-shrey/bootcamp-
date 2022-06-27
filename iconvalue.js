let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// let n = parseInt(readLine());
// let image = [];
// for (let index = 0; index < n; index++) {
//   image.push(parseInt(readLine()));
// }
// let m = parseInt(readLine());
// let icon = [];
// for (let index = 0; index < m; index++) {
//   icon.push(parseInt(readLine()));
// }
// let count = 0;
// for (let i = 0; i <= image.length - icon.length; i++) {
//   if (image[i] == icon[0]) {
//     let flag = 0;
//     for (let j = 0; j < icon.length; j++) {
//       if (image[i + j] == icon[j]) {
//         flag = 1;
//       } else {
//         flag = 0;
//         break;
//       }
//     }
//     if (flag == 1) {
//       count += 1;
//     }
//   }
// }
// console.log(count)
let image = parseInt(readLine());
let arr=[]
for(let i=0;i<image;i++){
    arr.push(parseInt(readLine()));
    //console.log(arr)
}
let pixel = parseInt(readLine());
let arr2=[]
for(let i=0;i<pixel;i++){
    arr2.push(parseInt(readLine()));
}
//console.log(arr2)
let count=0
for(let i=0;i<image;i++){
    if(arr2[0]==arr[i]){
        count++;
    }
   // console.log(count)
}
console.log(count)