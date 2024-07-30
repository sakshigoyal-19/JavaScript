//scope -> {}defins the scope of a function or program(it is different from object)

// Global scope: The default scope for all code running in script mode.
// Block scope: The scope created with a pair of curly braces (a block).

let a = 300
if(true){
    let a = 10
    const b = 20
    // var c = 30    //var type is not used in scope
    // console.log("INNER: ", a);
}


// console.log(a)
// console.log(b)
// console.log(c)      //variabe c is defined inside a scoped function so it can not return value outside a funtion but in this case it does therefore recommened not to use var in scoped function

// Nested Scope -> child function can access the variable of parent function

function one(){
    const username = "sakshi"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);     //website is defined inside the scope and we are printing it outside the scope so it throws an error "not defined"
    
    two()     //since it is a line by line execution so this line never gets executes , but after removing the above line is gets execute and returns the value
}
one()

if(true){
    const username = "sakshi"
    if(username === "sakshi"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website); //outside scope
}
// console.log(username); //outside scope


// ++++++++++++++++++++interesting concept++++++++++++++++++++
// different ways to initialize a function


//methon-1
addone(5)  //when function is initilized in this way you can access it before initilizing
function addone(num){
    return num + 1
}
addone(5)


//method-2
addTwo(5)    //but can not access this here as we have initilized funtion in a variable hence this throws error
const addTwo = function(num){
    return num + 2
}

addTwo(5)