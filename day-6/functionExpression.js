const addition = function (a, b) {
    return a + b

}

addition(2, 3)

// Asynchronous
setTimeout(function () {
    console.log('I will call after five second.')
}, 2000)

const another = addition
console.log(another(3, 7))