function hello() {
    console.log("Hello world")

}

function sum(a, b) {
    const c = a + b
    //hello();

    return c
}

const result = sum(2, 3)
//console.log(result)

const arr = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]

function sumOfArray(arr) {
    let sum2 = 0
    for (let i = 0; i < arr.length; i++) {
        sum2 += arr[i]

    }
    return sum2
}

const result2 = sumOfArray(arr)
console.log(result2)

function test(a, b, c) {
    console.log(arguments)
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])

    }

}
test(4, 5, 6)