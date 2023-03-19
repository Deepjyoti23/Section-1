let movies = ['RRR','PK','RUN','365Days','KGF','Mard'];

//Indexing

console.log(movies[4]);
console.log(movies.indexOf('RUN'));
console.log(movies.at(-1));
console.log(movies.length);

//slicing

console.log(movies.slice(2,5));
console.log(movies.slice(2));
console.log(movies.slice(2,100));
console.log(movies.slice(-5,-1));

//Adding Elements

//[...]-spread operator
console.log([...movies,'BARFI']);
//New array.
// movies=[...movies,'BARFI']
console.log(['BATMAN',...movies]);            
console.log(movies);
console.log([...movies.slice(0,4),'100Days',...movies.slice(4)]);


console.log(movies);
movies.pop();       // removes last element from array
console.log(movies);
movies.shift();    //removes first element from array
console.log(movies);

//Removing multiple elenets from array

movies = [...movies,'flash','exit14','nh10']
console.log(movies);
movies.splice(1,2);     //splice(starting index,how many elments)
console.log(movies);
