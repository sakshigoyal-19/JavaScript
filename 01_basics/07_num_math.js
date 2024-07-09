 const score = 400
//  console.log(score);

 const balance = new Number(200)
//  console.log(balance);

// console.log(balance.toString().length);  //converting numeric value to string and finding its length
// console.log(balance.toFixed(2));        //toFixed-> value after decimal

const otherNumber = 23.8576
// console.log(otherNumber.toPrecision(3));  //round off the value in the provided number


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++ Maths +++++++++++++++++++++++++
 
// console.log(Math);
// console.log(Math.abs(-4));           //absolute value (negative value becomes positve where as positive remains positive)

// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2));   //returns the higher round off value (example:4.4->5)
// console.log(Math.floor(4.9));  //returns the lower round off value(example:4.9->4)
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());          //returns value between 0 and 1
console.log((Math.random()*10)+1);   //to avoid the case of 0 we add 1 and get value within the range of 1-9
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //generalized way for line number 30 and 31
