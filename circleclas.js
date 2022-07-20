let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------



// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.
class Circle{
    constructor(radius){
        this .radius = radius
    }
    getArea( radius){
        if (this.radius>0){
     let  x = ((this.radius*this.radius)*3.14)
     return Math.ceil(x)
        }
        else {
            return "0"
    }
    }
    getCircumference(radius){
        if(this.radius>0){
      let y = ((2*this.radius)*3.14)
      return Math.ceil(y)
        }
        else{
            return "0"
        }
    }
}




// -------- Do NOT edit anything below this line ----------

let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());