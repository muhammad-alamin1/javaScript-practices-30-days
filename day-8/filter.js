const arr = [1, 2, 3, 4, 5]

const filterArray = arr.filter(function (value) {
    return value % 2 === 1
})

// console.log(filterArray)

function myFilter(arr, callBack) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr))
            newArr.push(arr[i])
    }
    return newArr
}

console.log(myFilter(arr,function(value){
    return value > 3
}))