
#     Javascript Array Methods

Array methods are essential tools in programming for manipulating and managing arrays. They simplify tasks like adding, removing, and transforming elements within an array. Some common array methods include push, pop, shift, unshift, map, filter, and reduce. These methods empower developers to efficiently work with arrays, making code more concise and readable.


# Some Array Methods?

Array length,
Array toString(), 
Array pop(), 
Array push(),
Array shift(),
Array unshift(),
Array join(),
Array delete(),
Array concat(),
Array flat(),
Array splice(),
Array slice()

# Reversing an Array
The reverse() method reverses the elements in an array.
           
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();


#  Numeric Sort
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

const numericArr = [11, 22, 54, 32, 87, 100];
const result2 = numericArr.sort(function(a, b){
    return a - b;
});
console.log(result2);


# JavaScript Array forEach()
The forEach() method calls a function (a callback function) once for each array element.

const myNumber = [22, 47, 88, 78, 96, 100];


let mySum = 0;

myNumber.forEach(function(value){
    mySum = mySum + value;
    return mySum
}

)
console.log(mySum);
