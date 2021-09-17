class CustomError extends Error {
    constructor(msg) {
        super(msg)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
    }
}


const makeWords = () => {
    try {
        console.log(`I am line one`)
        throw new CustomError(`I am your Error.`)
        console.log(`I am line two`)

    } catch (e) {
        console.log(e.message)
        console.log(`This is a Custom Error`)

    }


}

let words = makeWords(34)
console.log(words)
