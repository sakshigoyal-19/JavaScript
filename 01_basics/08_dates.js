//dates are calculated in milisecond
//date is a object in js
//months stsrts from 0 in js


let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let createDate = new Date(2023, 0, 23)
let mydate = new Date(2024, 0, 23, 6, 2)
let myCreatedDate = new Date("01-14-2023")
// console.log(createDate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createDate.getTime());
// console.log(Math.floor(Date.now()/1000));  //convert milisecond to second (by dividing by 1000)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `


//about internalization
newDate.toLocaleString('default', {               
    weekday: "long",
    
})



