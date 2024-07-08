//javascript is a dynamically typed language as variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.


//primitive
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];


let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


//to check the type of a variable
console.log(typeof myObj);


//Return type of variables
//Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  object-function
//        Object  =>  object

