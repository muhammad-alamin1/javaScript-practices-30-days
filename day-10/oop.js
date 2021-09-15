// Factory pattern
const rect = function (width, height) {
    return {
        width: width,
        height: height,

        draw: function () {
            console.log(`I am a rectangle`)
            this.printProperties()
        },
        printProperties: function () {
            console.log(`My width is ${this.width} & my heigh is ${this.height}. `)

        }
    }

}

const result = rect(10, 2)
const result2 = rect(20, 4)
// result.draw()
// result2.draw()


// Constructor pattern
const rectAngel = function (width, height) {
    this.width = width
    this.height = height

    this.draw = function () {
        console.log(`I am a rectangle`)
        this.printProperties()
    }
    this.printProperties = function () {
        console.log(`My width is ${this.width} & my heigh is ${this.height}. `)

    }
}

// New Key word
function myNew(constructor) {
    let obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    let argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj
}

const result3 = myNew(rectAngel, 2225, 2247)
result3.draw()