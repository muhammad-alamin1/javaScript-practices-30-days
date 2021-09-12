function sayHi(n) {
    if (n === 0)
        return
    console.log('Hi, I am calling')
    sayHi(n - 1)
}

sayHi(10)

function sum(n) {
    if (n === 1)
        return 1
    return n + sum(n - 1)
}

console.log(sum(5))

function fact(n) {
    if (n === 1)
        return 1
    return n * fact(n - 1)

}

console.log(fact(4))

const arr = [1, 2, 3, 4, 5]

function sumOfArray(arr, lastIndex) {
    if (lastIndex < 0)
        return 0

    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}

console.log(sumOfArray(arr, arr.length - 1))