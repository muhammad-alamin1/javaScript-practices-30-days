// 0 - Sunday, 1 - Monday, 3 - Tuesday ....
const date = new Date();
const today = date.getDay();

switch(today){
    case 0:
        console.log("Today is Sunday.");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednessday.");
        break;
    case 4:
        console.log("Today is Thursday.");
         break;
    case 5:
        console.log("Today is Friday");
        break;
    default:
        console.log("Today is Saturday")
}