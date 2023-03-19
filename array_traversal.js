let nums=[11,33,64,31,88,52];

for(let i=0;i<nums.length;i++){
    if(nums[i]%2 == 0)
        console.log(nums[i]);
}

console.log('----------\n');

//for each loop or for of loop
let newArr = [];
for(let n of nums){
    if(n%2==0){
    //    console.log(n);
        newArr.push(n);
    }
}

console.log(newArr);

console.log('----------\n');


//Filtering in array
//no changes allowed in filtering.
let res=nums.filter((n) => {return n%2 == 0});
console.log(res);

console.log('----------\n');

//map in array
//changes can be done in map.

let res2=nums.map((a) => {return a*2});
console.log(res2);

console.log('----------\n');

const prices=[1200,350,3250,5890,3990];

let price2=prices.map((a) => {return a-a/10});
console.log(price2);