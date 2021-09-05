/** write a programm like pattern
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
 *  */
const N = 5;
for (let i = 1; i <= N; i++) {
    let result = '';
    for (let j = 1; j <= i; j++) {
        result += `${j} `
    }
    console.log(result);
}

/**
 Second problem like - 

    * * * * *
    * * * * *
    * * * * *
    * * * * * 
    * * * * *
  
 */
console.log('\n');
for (let i = 1; i <= N; i++) {
    let result = '';
    for (let j = 1; j <= N; j++) {
        result += `* `;
    }
    console.log(result);
}