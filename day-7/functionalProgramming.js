/**
 // What is functional programming ?
    Functional programming is a programming paradigm-
// Three main terms
    1. Pure function 
    2. First class function
    3. Higher order function3
 */

// pure function
function sqr(n) {
    return n * n
}

console.log(sqr(2))

// not a pure function
let a = 10
function change() {
    a = 100
}
change()
console.log(a)

// first class function
function add(a, b) {
    return a + b

}
const sum = add
console.log(sum(2, 3))

let arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 8))