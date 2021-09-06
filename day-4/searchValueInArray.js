let arr = [2, 4, 5, 7, 3];
const find = 7;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
        console.log(`Data Found Index ${i}`);
        isFound = true;
        break;
    }

}

if (!isFound)
    console.log(`Data Not Found`);