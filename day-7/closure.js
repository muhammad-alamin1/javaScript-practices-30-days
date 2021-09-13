let b = 10

function abc() {
    console.log(b)
    let x = 5

    return function () {
        console.log(x)
    }
}

const a = abc()
console.log(a)