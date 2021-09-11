function add(a, b) {
    return a + b
}

function manipulate(a, b, func) {
    let c = a + b
    let d = a - b

    return function () {
        let m = func(a, b)
        return c * d * m
    }
}
const multiply = manipulate(2, 3, add)
console.log(multiply())