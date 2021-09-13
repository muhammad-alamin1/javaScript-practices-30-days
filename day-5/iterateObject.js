const obj = {
    a: 1,
    b: 2
}

// console.log('a' in obj)
// console.log('x' in obj)

// for in loop
for (let i in obj) {
    // console.log(i)
    console.log(`${i} : ${obj[i]}`)
}