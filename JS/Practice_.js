let newvalue=133;
ne=String(newvalue);
// console.log(ne);
// console.log(typeof(ne));
let arr={Name:"Aditya",section:"cse-2A"};
// console.log(arr.Name);
// console.log(arr);

// To console all output at one time
// console.table([arr,arr.Name,arr.section,ne,typeof(ne)]);

// "use strict"; //treat all Js code in Newer version

// in primitive type stack memory is used and in non-primitive heap memory is used


let user = {   
    userAccount : "user@gamil.com",
    userUPI : "user@ybl",
    userAddress : "Noida",
};
// console.log(user.userAccount);
// console.log(user.userAddress);
// console.log(user.userUPI);
// console.table(user);


const game = new String("Warzone");
console.log(game[0]);
console.log(game.length);
console.log(game.__proto__);
console.log(game.toLowerCase());
console.log(game.toUpperCase());