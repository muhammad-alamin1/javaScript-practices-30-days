const arr = [7, 2, 9, 12, 46, 1, 4, 0, 4, 2, 7, 8, 4, 23, -5, -4, -8]
// console.log(arr.sort())
arr.sort(function (a, b) {
    if (a > b)
        return 1
    else if (a < b)
        return -1
    else
        return 0
})

console.log(arr)