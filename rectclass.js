let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named as `Rectangle`. 
// Method to get area should be named as `rectangleArea`.
// Method to get perimeter should be named as `rectanglePerimeter`.
// You should be taking `length` and `width` as inputs when creating the object for your class.
 class Rectangle{
    constructor(length,width){
    this.length = length
    this.width = width
    }
     rectangleArea(){
        if( length>0&&width>0){
        let x = this.length*this.width
        return (x)
        }
        else{
            return "0"
        }
    }
    rectanglePerimeter(){
        if(length>0&width>0){
            let y =  (2*(this.length+this.width))
            return(y)
        }
        else{
            return("0")
        }
    }

 }


let length = parseInt(readLine());
let width  = parseInt(readLine());
let newRectangle =new Rectangle(length,width);
console.log(newRectangle.rectangleArea());
console.log(newRectangle.rectanglePerimeter());