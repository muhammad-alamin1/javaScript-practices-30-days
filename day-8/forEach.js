const arr = [1, 2, 3, 4, 5]

let sum = 0
arr.forEach(function (value, index, arr) {
    //console.log(value, index, arr)
    //sum += value
})
// console.log(sum)


// implementation forEach function
function for_each(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        cb(arr[i], i, arr)
    }
}

for_each(arr,function (value, index, arr){
    console.log(value, index, arr)
    sum += value
})
console.log(sum)