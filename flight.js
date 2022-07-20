const { match } = require("assert");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Flight {
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
	}
	calculateFlight(upTime,downTime){
		//write your code here

		let x = (parseInt(this.upTime[0]*60+this.uptime[1])) - (parseInt (this.downTime[0]*60+downTime[1]))
      return x;
    }
}

// -------- Do NOT edit anything below this line ----------
let upTime=readLine().split(":");
let downTime=readLine().split(":");
let NewFlight = new Flight(upTime,downTime);
console.log(NewFlight.calculateFlight());