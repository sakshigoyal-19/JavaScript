 const name = "Sakshi"
 const repoCount = 50
 
//  console.log(name + repoCount + " Value");  //not an ideal method to print string

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //this is also called string inter-polation

const gameName = new String('Sakshi-sg-com-js')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

// const newString = gameName.substring(0,4)   //does not include the last value (does not consider negative value)
// console.log(newString);

// const anotherString = gameName.slice(-8,4)    //can pass negative value meaning it counts the value in reverse format
// console.log(anotherString);

const newStringOne = "     Sakshi       "
console.log(newStringOne);
console.log(newStringOne.trim());    //removes all the staringa nd ending spaces (to remove spaces from either ends use trimStart() or trimEnd())

const url = "https:sakshi.com/sakshi%20javascript"
console.log(url.replace('%20','-'))


console.log(url.includes('87'))

console.log(gameName.split('-'))



