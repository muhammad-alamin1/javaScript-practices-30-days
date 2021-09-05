let sum = 0;
let i = 0;

while (i <= 10) {
    sum += i;
    console.log(`Sum: ${sum} = ${i}`);

    i++;
}


let isRunning = true;

while (isRunning) {
    const ran = Math.floor(Math.random() * 10 + 1);
    if (ran === 9) {
        console.log('Random value is 9');
        isRunning = false;
    } else {
        console.log(`You have got ${ran}`);
    }

}