/** There are mainly three types of loops
like ---
    1. For loop
    2. While loop
    3. Do while loop
 */
//  for(initializer; condition; increment or decrement){
//      console.log();
//  }
let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum += i;
    console.log(`Sum: ${sum} = ${i}`);
}