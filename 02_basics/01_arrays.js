//it is a collection of multiple values of different datatypes
//array in js are resizable 
//array creates shallow copy meaning changes directly happnes in original value


const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["captain America", "batman"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArray[0]);
// console.log(myHeros[1]);
// console.log(myArr2[3]);


//Array Method
myArray.push(6)
myArray.pop()

// myArray.unshift(3)     //this adds value in the start of an array
// myArray.shift()        //removes the starting value of an array
// console.log(myArray);

// console.log(myArray.includes(5)); 
// console.log(myArray.indexOf(3));

const newArr = myArray.join()   //combines all the values of an array into string

// console.log(myArray);
// console.log( newArr);


// slice, splice

// console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArray);


const myn2 = myArray.splice(1, 3)
// console.log("C ", myArray);
// console.log(myn2);

//slice() ->  returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.


//splice() -> changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

const marval_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros)     //takes whole array as a single element(works on existing array)
// console.log(marval_heros);     
// console.log(marval_heros[3][2]);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)    //merge both arrays properly into a differt array
// console.log(allHeros);

const all_new_heros = [...marval_heros, ...dc_heros]   //works same as concat
// console.log(all_new_heros);

 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
//flat() ->  creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.


console.log(Array.isArray("Sakshi")) //isArray -> static method determines whether the passed value is an Array or not

console.log(Array.from("Sakshi")) //from() -> static method creates a new, shallow-copied Array instance from an iterable or array-like object.

console.log(Array.from({name: "sakshi"})) // interesting (returns empty array as it can't convert directly)



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //of() -> creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

