const arr = [2, 4, 5, 7];
const arr2 = [3, 5, 9, 1];

console.log(arr.join(`,,`));
const arr3 = arr.concat(arr2);
console.log(arr3);
console.log(Array.isArray(arr));
console.log(arr.fill(true));

let a = [1, 2];
//let b = a;
let b = Array.from(a);

b[0] = 5; // without Array.from method output like array a = [5, 2]
console.log(a);
console.log(b); 

