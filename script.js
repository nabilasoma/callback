// array methods

// 1. array length

const number = [1, 8, 12, 11, 55, 23];  
// the length of number array is 5

// Array toString

const myString = ['Bangladesh', 'India', 'Japan', 'China', 'Canada'];

const result = document.getElementById('myString').innerHTML = number.toString();

console.log(typeof result);

// Array pop will remove the last element from the Array

const myPop = myString.pop();
console.log(myString);

// Array push will add a new element to an array. It will change the main array.

const myPush = myString.push('USA');
console.log(myString);

// Array shift will remove the first element from an array.

myString.shift('Turkey');
console.log(myString);

// Array unShift will add an element from the first of an array.

myString.unshift('Australia');
console.log(myString);

// Array concat will join to arrays

const arrays = number.concat(myString);
console.log(arrays);


// The splice() method adds new elements to an array

const arrSplice = myString.splice(0, 2);
console.log(arrSplice);

// Array Sort

const numericArr = [11, 22, 54, 32, 87, 100];
const result2 = numericArr.sort(function(a, b){
    return a - b;
});
console.log(result2);

