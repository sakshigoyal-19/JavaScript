// const tinderUser = new Object()  //singalton Object
const tinderUser = {}    //non-singalton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Sakshi",
            lastname: "Goyal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  //long chain



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)


//values from database
const users = [
    {
        id: 1,
        email: "S@gmail.com"
    },

    {
        id: 2,
        email: "hdfbg@gmail.com"
    },

    {
        id: 5,
        email: "hjdfj@gmail.com"
    }
]

users[1].email


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));      //static method returns an array of a given object's key-value pairs.
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  
//Returns true if the object has the specified property as own property; false otherwise.




//desturcturing

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);



//jason - API basic intro
// {
//     "name": "hitesh",
//     "coursename": "javascript",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]