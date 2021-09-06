const str = 'Some String';
const str2 = 'Bangladesh';
let length = 0;

while(1){
    if(str.charAt(length) == '')
        break;
    else
        length++;
}
console.log(length);
console.log(str2.length);