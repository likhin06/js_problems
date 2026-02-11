//smallest number
let arr = [4, 3, 2];

let smallestNumber = arr
    .sort((a, b) => a - b)  // sort in ascending order
    .join("");              // join digits

console.log(smallestNumber);
