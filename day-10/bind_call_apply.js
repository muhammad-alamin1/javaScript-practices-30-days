function myFunc(c, d) {
    console.log(this)
    console.log(this.a + this.b + c + d)
}

myFunc.call({ a: 3, b: 5 }, 10, 5)
myFunc.apply({ a: 588, b: 333 }, [100, 200])
const testBind = myFunc.bind({ a: 7, b: 3 })
testBind(5, 4)