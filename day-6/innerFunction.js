function something(greet, name) {
    function sayHi() {
        if (name)
            return `${name.split()[0]}`
        else
            return ``
    }
    const message = `${greet} ${sayHi()}`
    console.log(message)
}

something('Welcome', 'Muhammad Al-amin')