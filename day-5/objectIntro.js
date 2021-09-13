// Object Literal
let obj = {}
obj.x = 10
console.log(obj)

let point = {
    x: 10,
    y: 20
}

point.z = 30

// dot notation
console.log(point.x)
// Array notation
console.log(point['y'])
console.log(point)
// remove property
delete point.y
console.log(point)

// Object Constructor
let obj3 = Object();
obj3.a = 10
console.log(obj3)

let obj2 = new Object()
obj2.b = 20
console.log(obj2)

