function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("I");
}

// sayMyName()       //sayMyName -> reference, sayMyName()-> execution

// function addTwoNumbers(number1, number2){     //(number1, number2)->parameters
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){     
    // let result = number1+number2
    // return result
    // console.log("sakshi");     //wont't be executed (rule in function-> anything written after return statement won't be executed)

    return number1+number2
}

const result = addTwoNumbers(3,4)   //(3,4)->arguments
// console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined){//(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Sakshi"));
// console.log(loginUserMessage());      //returns undefined not null


//shopping cart situation
//rest operator -> ...(returns values in array)
function calculateCartPrice(...num1){
    return num1

}
console.log(calculateCartPrice(200,400,500));   

const user ={
    username: "sakshi",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

const myNewArray = [200,300,500,800]
function returnSecondValue(getArray){
    return myNewArray[2]

}
console.log(returnSecondValue(myNewArray));