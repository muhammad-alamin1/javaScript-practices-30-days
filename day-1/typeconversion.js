var str = '100';
var n = 10;

console.log(Number(str));
console.log(Number.parseInt(str));
console.log(n.toString());
console.log(Boolean(-Infinity));

/** Falsy values 
    like - '', 0, null, undefined,
 */
console.log(Boolean(''));
console.log(Boolean('abc'));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(2225));

var x = true;
console.log(x.toString()); // boolean to string conversion
console.log(Infinity.toString());