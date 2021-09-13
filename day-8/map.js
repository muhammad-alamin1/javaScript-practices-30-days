let arr = [1, 2, 3]

const sqrArr = arr.map(function (value) {
    return value * value
})

// console.log(arr)
// console.log(sqrArr)

function myMap(arr, callBack) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let temp = callBack(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}
const qb = myMap(arr, function (value) {
    return value * value * value
})

const mten = myMap(arr, function (value) {
    return value * 10
})

console.log(arr)
console.log(qb)
console.log(mten)