const n = 11;
let str = '';

if (n % 2 === 0)
    str = 'Even';
else
    str = 'Odd';

console.log(str);

// condition ? true side : false side
const result = n % 2 === 0 ? 'Even' : 'Odd';
console.log(result);

// AND Operation shorthand 
const isOk = false;
isOk && console.log('Everything is okk.');