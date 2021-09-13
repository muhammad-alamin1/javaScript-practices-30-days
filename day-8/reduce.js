let arr = [1, 2, 3, 4, 5]

const sum = arr.reduce(function (prev, curr, index, arr) {
    return prev + curr
}, 0)

const max = arr.reduce(function (prev, curr) {
    return Math.max(prev, curr);
})

// console.log(sum)
console.log(max)

// reduce function implementation
function myReduce(arr, callBack, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = callBack(acc, arr[i])

    }
    return acc
}

const sum2 = myReduce(arr, function(prev,curr){
    return prev + curr
},0)

const min = myReduce(arr, function(prev,curr){
    return Math.min(prev,curr)
},arr[0]) 
console.log(sum2, min)