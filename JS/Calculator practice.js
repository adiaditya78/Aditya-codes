function caculator(Op1,Op2,operator){
    let result;
    switch(operator){
        case '+':
            result=Op1+Op2;
        break;
        case '-':
            result=Op1-Op2;
        break;
        case '*':    
            result=Op1*Op2;
            break;
        case '/':
            result=Op1/Op2;
            break;
        case "%":
            result=Op1%Op2;
            break;
        
        default:
            console.log("Enter the appropriate Operator");   
    }
    console.log(`The result of ${Op1} and ${Op2} on ${operator} operator is = ${result}`);
}
caculator(2,0,"*");

// function palindrome(num){
//     let number=num;
//     let sum=0;
//     while(num!=0){
//       let digit=num%10;
//       sum=sum*10+digit;
//       num=num/10;
//   }
//     if(sum==number){
//         console.log(`${number} is palindrome`);
//     }
//     else{
//         console.log(`${number} is not palindrome`);
//     }
// }
// palindrome(333);

// reverse string
function isreverse(str){
    let reverse="";
    for(let char=str.length-1; char>=0; char--){
        console.log(str[char]);
        reverse=reverse+str[char];
    }return reverse
}
console.log(isreverse("Anand"));

