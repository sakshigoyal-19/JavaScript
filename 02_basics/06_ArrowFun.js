const user = {
    username: "sakshi",
    price: 999,

     welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);                //this-> refers the current context/value
        console.log(this);
     }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

console.log(this);


// function one(){
//     let username = 'sakshi'
//     console.log(this.username);   //undefined ->this in working in object and not in function 
// }
// one()


// const chai = function(){
//     let username = "sakshi"
//     console.log(this.username);     //this does not work in this case also
// }
// chai()


//arrow function        //syntax: ()=>{}
// const chai = () => {
//     let username = "sakshi"
//     console.log(this);     //this does not work inside arrow function also
// }
// chai()


// const addTwo = (num1,num2) => {         //when using curly braces{} one should use return keyword
//     return num1 + num2
// }
// console.log(addTwo(2,5))


//another way(known as implicit return)
// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(2,5))


// const addTwo = (num1,num2) => (num1 + num2)             //but when using parenthesis return keyword is not required(mostly used in react)
// console.log(addTwo(2,5))


const addTwo = (num1,num2) => ({username: "sakshi"})    //benifit of using curly braces helps when returning an object         
console.log(addTwo(2,5))




//will be discussed in loops
// const myArray = [1,3,5,3,6]
// myArray.forEach()