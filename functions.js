//defining the function
//three ways of defining functions
//------1-----------
function addnums(a,b){
    var c=a+b;
    console.log(c);
}

//calling the function

addnums(2,3)
// console.log(c);

//-----------2----------
const getavg = function(m1,m2,m3){
    console.log(m1,m2,m3);
    let avg=(m1+m2+m3)/3;
    console.log(avg);
}
//NaN- not a number
getavg(100,200);

//------3------

const prodnum = (a,b) => {
    let p=a*b;
    console.log(p);
    return p;
}

let res = prodnum(10,5);

console.log(res);