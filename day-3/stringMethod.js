let a = 'I\'m\ '
let b = 'Muhammad'

const c = a.concat(b);
// console.log(c);
const d = c.substr(4, 11);
// console.log(d);
console.log(c.charAt(6));
console.log(d.startsWith('M'));
console.log(d.endsWith('d'));
console.log(d.toUpperCase());
console.log(d.toLowerCase());
console.log('            asdfghjkl        '.trim());
console.log(c.split(' '));