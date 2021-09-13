let a = `abc`

if (true)
    console.log(a)

function x() {
    function y() {
        let a = 10
        console.log(a)
    }
    console.log(a)
    y()
}
x()