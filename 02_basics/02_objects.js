//object literals(signaltons are not created)


const mySym = Symbol("key1")    //declear a symbol datatype


const JsUser ={
    name: "Sakshi",
    "full name": "Sakshi Goyal",
    [mySym]: "mykey1",          //to use symbol as a key inside object without changing its datatype use[] and to use it normally remove [].
    age: 20,
    location: "Gwalior",
    email: "sakshi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

// console.log(JsUser.email)         //doesnot work with values like full name (but this the most common way to return a value)
// console.log(JsUser["email"])      //works with every value 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  


// JsUser.email = "sakshi@gpt.com"     //to override the value

// Object.freeze(JsUser)     //freeze all the values inside the object (values can't be changed)
// JsUser.email = "sakshi@netflix.com"  
// console.log(JsUser);   


JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);     //this -> refers to the object that the method is attached to
}

console.log(JsUser.greeting);        //function does not get execute only the reference is given

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());