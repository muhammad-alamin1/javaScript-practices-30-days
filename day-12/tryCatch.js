const makeWords = text => {
    try {
        let str = text.trim()
        let words = str.split(' ')

        return words
    } catch (error) {
        console.log(error.message)

    } finally {
        const add = (a, b) => {
            return a + b
        }
        const result = add(2, 5)
        console.log(result)
    }


}

let words = makeWords(34)
console.log(words)

