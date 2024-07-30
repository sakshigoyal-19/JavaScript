//Immediately Invoked Function Expressions(IIFE)
//Pollution of global scope causes problem many times, so we use iife to remove the variable or declaration of that global scope.

(function chai(){
    // named IIFE ->when it has some name like in this case the name is chai
    console.log(`DB CONNECTED`);
})();              //to write two iifes together put semicolen after one iife


//unnamed iife
( (name) => {          //name here is a parameter 
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

