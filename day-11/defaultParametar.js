const sqr = (n = 1) =>{
    return n * n
}

console.log(sqr())

const greet = (msg = 'Hello', name = 'Al-amin') =>{
    console.log(`${msg} ${name}`)
}

greet('Hello', 'Muhammad')