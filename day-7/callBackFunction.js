function sample(a, b, cb) {
    let c = a + b
    let d = a - b
    const result = cb(c, d)
    
    return result

}

function sum (a, b) {
    return a + b
}

const result = sample(5, 8, sum)
console.log(result)

const result2 = sample(4, 3, function (c, d){
    return c - d
})
console.log(result2)