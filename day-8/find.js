let arr = [2, 5, 2, 8, 3, 1, 45, 35, 3, 1, 9]

const result = arr.find(function (value, index) {
    return value === 9
})
// console.log(result)

// search index 
const result2 = arr.findIndex(function (value) {
    return value === 9
})
// console.log(result2)

function myFind(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i]))
            // return arr[i]   // result3 = value
            return i //     result4 = index number
    }
}

const result3 = myFind(arr, function (value) {
    return value === 9
})

// console.log(result3);

const result4 = myFind(arr, function (value, index) {
    return value === 9
})
console.log(result4);