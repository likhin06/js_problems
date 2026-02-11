// largest number
let arr = [4, 3, 2];

let largestNumber = arr
    .sort((a, b) => b - a) // sort in descending order
    .join("");            // join digits

console.log(largestNumber);
