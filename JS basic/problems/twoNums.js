// --- Directions
// Given an array and a sum value
// determine the indexes of first 2 numbers whose sum is equal to the sum value
// --- Examples
// twoNums([1, 3, 5, 7, 2], 9) -> { index1: 3, index2: 4 }
// twoNums([1, 3, 5, 7, 2], 10) -> { index1: 1, index2: 3 }

function twoNums(arr, sum) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    const diff = sum - num;
    if (map.has(diff)) {
      return { index1: map.get(diff), index2: i };
    } else {
      map.set(num, i);
    }
  }
}

console.log(twoNums([1, 3, 5, 7, 2], 10));
