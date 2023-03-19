// console.log('------------------disvisible by 7 and 13------------');
// for(let i=0; i<10;i++){
//     console.log(i);
// }

// for(let i=1; i<=100;i++){
//     if((i%7===0)||(i%13===0)){
//         console.log(i,'is divisible by 7 or 13');
//     }
    
// }

// console.log('-------------swapping two numbers------------');


// let [a, b]=[0,1];
// console.log(a);
// console.log(b);

// for(let i=0; i<10; i++){
//     let c=a+b;
//     console.log(c);
//     [a,b]=[b,c];
// }

// console.log('-------------Factorial------------');


// let num=5;
// let fact=1;
// for(let i=1;i<=num;i++)
// {
//     fact=fact*i;
// }
// console.log(fact);

// console.log('-------------Prime numbers------------');


// let mynum=3654;
// let prime=true;

// for(let i=2; i<mynum; i++)
// {
//     if(mynum%i==0){
//         prime=false;
//         console.log('not prime');
//         break;
//     }
// }
// if(prime) console.log('prime');

// console.log('-------------swapping two numbers------------');

// let n1=37654;
// let reverse=0;
// while(n1>0){
//     let r=n1%10;
//     reverse=reverse*10+r;
//     n1=parseInt(n1/10);
// }
// console.log(reverse);

console.log('-------------Homework------------');

console.log('-------------print prime between 1 to 100------------');

for(let i=1; i<=100;i++ ){
    mynum=i;
    prime=true;
    for(let j=2; j<i;j++)
    {
        if(mynum%j==0)
        prime=false;
        break;
    }
    if(prime) console.log(i);
}

console.log('-------------print palindrome------------');


let n1=373;
 let reverse=0;
 let temp1=n1;
while(n1>0){
     let r=n1%10;
     reverse=reverse*10+r;
     n1=parseInt(n1/10);
 }
if(reverse===temp1){
    
    console.log('palindrome');
} 
else {
    console.log('not palindrome');
}


console.log('-------------print armstrong------------');

let n=153;
let sum=0;
let temp=n;
while(n>0){
         let r=n%10;
         sum=sum+(r*r*r);
         n=parseInt(n/10);
}
if(sum===temp) console.log('Armstrong number');
else    console.log('not an armstrong number');




