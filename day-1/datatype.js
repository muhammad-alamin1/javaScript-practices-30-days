/**
 * JavaScript has two types of data type.
    1. Primitive 
        Primitive types are defined by JavaScript.
        like - Number, String, Boolean, Undefine, null

    2. Object 
        Object types are user defined data type.
        like - Array, Object, Function
 */

// Number data type
var n = 2225;
var floatNumber = '3.1416';
var nn = Number('24'); // string to number
console.log(nn);
console.log(Number.parseFloat(floatNumber));
console.log(Number.parseInt(floatNumber));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(1 / 0); // infinity
console.log('abc' * 10); // NaN = not a number;

// String data type
// Anything wrapped between quotes is called string
var str = 'String'; // str, str2, str3 is a string literal
var str2 = "String";
var str3 = `String`;
var str4 = String('ABC');
var str5 = String(2225);
console.log(str5);

// Boolean data type
var bool = true;
var bool2 = false;
var b1 = Boolean(bool);
var b2 = Boolean(bool2);
console.log(bool, bool2);

// undefined vs null 
// A variable without value always store Undefine
// A variable with unknown value can store null
// NULL is a special type data used as a absence of an object
var abc; // undefined
var xyz = null;
console.log(abc, xyz);

// hexadecimal & octal number : base 16 and 8
var hex = 0xff; // hexadecimal number start 0X or 0x;
console.log(hex);
var oct = 0756; // and octal start 0;
console.log(oct);

