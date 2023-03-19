console.log('Hello Javascript');
marks = 90;
console.log(marks);
myname=`Deepjyoti`;
console.log(myname);

num=18;

// console.log(typeof(num));

// if(num%2 === 0)
// {
//     console.log('even');
// }
// else{
//     console.log('odd');
// }

console.log(2**3);

console.log(16**0.5);

num2=num**0.5;

if(num2*num2 === num){
    console.log('perfect square');
}
else{
    console.log('not a perfect square');
}

if(num%7===0){
    console.log(num ,'is divisible by 7');
}
if (num%11===0){
    console.log(num,'is divisible by 11');
}
if((num%7 ===0) && (num%11 === 0)){
    console.log(num,'is divisible by both 7 and 11');
}
else{
    console.log(num,'is neither divisible by 7 nor 11');
}