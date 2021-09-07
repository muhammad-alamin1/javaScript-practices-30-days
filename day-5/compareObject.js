const obj = {
    a: 1,
    b: 2
}

const obj2 = {
    a: 1,
    b: 2
}

if (obj.a === obj2.a && obj.b === obj2.b)
    console.log(true)
else
    console.log(false)

// or
console.log(JSON.stringify(obj) === JSON.stringify(obj2))