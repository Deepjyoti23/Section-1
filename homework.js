console.log('-------------Homework------------');

// console.log('-------------print prime between 1 to 100------------');

// for(let i=1; i<=100;i++ ){
//     mynum=i;
//     prime=true;
//     for(let j=2; j<i;j++)
//     {
//         if(mynum%j==0)
//         prime=false;
//         break;
//     }
//     if(prime) console.log(i);
// }

// console.log('-------------print palindrome------------');


// let n1=373;
//  let reverse=0;
//  let temp1=n1;
// while(n1>0){
//      let r=n1%10;
//      reverse=reverse*10+r;
//      n1=parseInt(n1/10);
//  }
// if(reverse===temp1){
    
//     console.log('palindrome');
// } 
// else {
//     console.log('not palindrome');
// }


// console.log('-------------print armstrong------------');

// let n=153;
// let sum=0;
// let temp=n;
// while(n>0){
//          let r=n%10;
//          sum=sum+(r*r*r);
//          n=parseInt(n/10);
// }
// if(sum===temp) console.log('Armstrong number');
// else    console.log('not an armstrong number');

// console.log('------------add am element at 4th position------------');

// const num=[1,2,5,3,9,6,8]
// // num=[...num.slice(0,3),'4',...num.slice(3)];
// console.log([...num.slice(0,3),'4',...num.slice(3)]);

// console.log('------------replace an element at 4th position------------');

// console.log([...num.slice(0,3),'4',...num.slice(4)]);

// console.log('-----------WAP to store 5 friend names in an array and then get the firstb three character of the 2nd element------------');

// const friends=['ajay','vijay','anya','shruti','himanshi']
// console.log(friends[1].slice(0,3));
// // console.log(friends[1].charAt(2));

//WAP to filter all non - perfect square from an array.

let arr=[4,6,9,15,16,20,25,36,40,82,75,81,64,65,49,50];

let res=arr.filter((n) => {return (n**0.5!== parseInt(n**0.5))})
console.log(res);

//Create a function that takes an array and index as parameter and removes the single element on that index and returns the array.

let func1 = (num,i) =>{
    num.splice(i,1);
    return num;
    
}

let res1=func1(arr,3);
console.log(res1);

//given an array ['₹3400', '₹845', '₹20', '₹940', '₹3700'] convert all the elements to number

const price=['₹3400', '₹845', '₹20', '₹940', '₹3700'];

let res2=price.map((n) => {return parseInt(n.slice(1))});

console.log(res2);