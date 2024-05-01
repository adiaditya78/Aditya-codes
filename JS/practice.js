const prompt =require('prompt-sync')();



console.log('hello');
var myfirstname="adi";
console.log(myfirstname);

// To convert the string into number.
var myNumber='zero';
console.log(typeof myNumber); 
console.log(typeof +myNumber);
console.log(typeof Number(myNumber));

// To convert the string into the number
var str =5;
console.log(typeof(str));
console.log( typeof String(str));
console.log(typeof(str +""))

// To convert string to number using parseInt and parseFloat
var myStr="43";
const myNum=parseInt(myStr);
console.log(myNum);


var myStr="43.55";
const my_Num=parseFloat(myStr);
console.log(my_Num);


var myStr="xyz"; // "&123"
const mNum=parseFloat(myStr);
console.log(mNum);

console.log(10+"20");
console.log(9-"5");
console.log("JAva"+" script");
console.log(""+"");
console.log(""+0);
console.log("adi"-"aditya");
console.log(true+true);
console.log(false+true);
console.log(false-true);
console.log(5=="5");
console.log(5===5);
console.log(5==="5");
var age=19;
var license=true;
var result=age>=18 && license
    console.log(result); 
console.log(6<22<33)
console.log("12"+10+10);


// use of if else
var temp=22;
var temp2=55;
if(temp>20 && temp2<56)
{
    console.log("Goto beach");
}
else{
   console.log("Stay on home");
}

// To  check the No. even or odd
var num=11;
if(num%2==0){
    console.log("it is even");
}else{
    console.log("it is odd");
}

// TO check the no. prime or not
var num=3;
var count=0;
for(i=2;i<=num/2;i++){
    if(num%i==0){
        count++;
    }}
if(count==0){
    console.log("prime");
} else{
    console.log("not prime");
}   


// switch statement
var num=1;
switch(num){
    case 1:
        console.log("Monday");
        break;
    case 2:
            console.log("Tuesday");
            break;   
    default:
        console.log("enter 1 or 2");
}

var a=5;
var b=10;
var result;
areaofshapes="square";
switch(areaofshapes){
    case "square":
        console.log(a*a);
        break;
    case "circle":
        console.log(3.14*a*a);
        break;
    case "rectangle":
        console.log(a*b);
    default:
        console.log("enter a valid shape");    
}

// table using loop
var num=5;
for(i=1;i<=10;i++){
    console.log("5*"+i+"="+5*i);
}
// let userInput;
// userInput=prompt("emn");
// console.log(userInput);


// Pattern print
for(i=0;i<5;i++)
{ var Pattern ="";
    for(j=0;j<=i;j++){
        Pattern=Pattern+"*";
    }console.log(Pattern);
}
                  // Funtions
function add(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
function modulus(a,b){
    return a%b;
}

a=10;
b=5;
console.log(add(a,b));
console.log(subtraction(a,b));
console.log(multiplication(a,b));
console.log(division(a,b));
console.log(modulus(a,b));


function greet(name){
    console.log("Hello "+name+", Welcome to the Hell.");
}
greet("Ram");

// function expression
var result=function sum(a,b,c){
    return a+b+c;
}
console.log(result(2,3,4));
console.log(result(2,6,8));

// Ecmascript let and const
let myfirst="aditya";
console.log(myfirst);


// templete String
let firstName="aditya";
let lastName="maurya";
let fullName=`${firstName} ${lastName}`;
console.log(fullName);

// String interpolation

let Age=19;
let message=`I am ${Age} years old`;
console.log(message);


// Default parameters
function sum(a=10,b){
    return a+b;
}
console.log(sum(3,12));

                    // ARRAY START 
// craeting array{

  //constructor
  let animal= new Array("cow","Goat","tiger");
  console.log(animal);


  //Literals
  let planet=["Earth","Venus","Mars","Jupiter"];
  console.log(planet); 
//Empty Array
let arr=[];
console.log(arr);
console.log(typeof(arr));

// Accessing Array
let car=["Range Rover","Audi","Bugatti",1];
console.log(car[2]);
console.log(car[3]);
console.log(typeof(car));

// Modifying Elements
car[2]="Tata";
car[3]="Jaguar";
console.log(car);
console.log(typeof(car));


//for..of loop
for ( let item of car){
    console.log(item);

}
// for... in loop
for (let item in car){
    console.log(item);
}


// foreach 
car.forEach((curele,index,arr)=>
{console.log(`${curele} and ${index}`)});

planet.forEach(function
callback(curele,index,arr){
    console.log(curele);
})


//map()
var a=car.map((curele,index,arr)=>
{return `${curele} and ${index}`});
console.log(a)

//PUSH
planet.push("Neptune","Mercury");
console.log(planet);

//POP
planet.pop();
console.log(planet);

//Unshift
planet.unshift("Mercury");
console.log(planet);

//shift
planet.shift();
console.log(planet);

//splice
console.log(car);
car.splice(2,0,"Hexa", "Harrier","Defender");
console.log(car);

//searching
// indexOf()
console.log(car)
console.log(car.indexOf("Hexa",2));

console.log(car.indexOf("Hexa",3));


// Includes()
console.log(car);
console.log(car.includes("Hexa",2));

console.log(car.includes("Hexa",3));

// lastIndexOf()
let num2=[1,2,3,4,6,7,4,6,8,10,11,3,6,4];
console.log(num2.lastIndexOf(6));
console.log(num2.lastIndexOf(6,8));


// to do
let months=["Jan","Mar","April","July"];
months.push("Dec");
console.log(months);
console.log(months.splice());

months.splice(1,1,'March');
console.log(months);

let ind=months.indexOf("July");
months.splice(ind,1);
console.log(months);
// OR
months.pop();
console.log(months);

// find
const num3=[1,2,4,3,6,4,5,6,5,9,5,10];
const resu=num3.find((curele)=>{
    return curele>9;
});
console.log(resu);

// find index 
const num4=[1,2,4,3,6,4,5,6,5,9,5,10];
const resu1=num3.findIndex((curele)=>{
    return curele>9;
});
console.log(resu1);

// filter
const res3=num4.filter((curele)=>{
    return curele>2});
console.log(res3);

// Sort
console.log(car.sort());

// Compare
// ascending
let newNum=num4.sort((a,b)=>{
    if(a>b) return 1;
    if(b>a)return -1;
});
 console.log(newNum);
// Descending
let newNum1=num4.sort((a,b)=>{
    if(a>b) return -1;
    if(b>a) return 1;
}) ;
console.log(newNum1);

// Reduced
const r1=num4.reduce((acc,ce,inde,arr)=>{
   return acc+ce;
},0);
console.log(r1);

const r2=num4.reduce((acc,ce)=>{
    return acc+ce;
 },0);
 console.log(r2);   
// }               END OF ARRAY

                //    String 
let str1="Aditya Maurya";
// console.log(str1.length)   
// let str2="'India' is Great"; 
// let str2='"India" is Great'; 
// let str2="\"India\" is Great"; 
let str2="\'India\' is Great"; 
console.log(str2);


console.log(str1.indexOf("M",8));
console.log(str1.indexOf("M"));

console.log(str1.lastIndexOf("M",8));

console.log(str1.lastIndexOf("M",6));

console.log(str1.lastIndexOf("M"));