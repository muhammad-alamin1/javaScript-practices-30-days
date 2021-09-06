let arr = [2, 4, 5, 7, 3];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    // let element = arr[i];
    // element += 2;
    arr[i] = arr[i] + 2;
    sum += arr[i];

}
console.log(arr);
console.log(`Sum: ${sum}`);