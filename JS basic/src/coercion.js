// coercion

// 1. when 1 is string , other gets converted to string
const arr1 = [1, 2, 3];
const str = '1,2,3';
// happens internally
// console.log(arr1.toString());
// console.log(arr1 == str);  -> true

const arr = [];
// console.log(arr.toString()); -> ""

// var x = new Boolean(false);
// if (x) {
// 	console.log(x);
// }
