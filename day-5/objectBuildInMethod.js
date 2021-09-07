const obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

const obj2 = Object.assign({}, obj)
obj2.x = 100

console.log(obj)
console.log(obj2)
