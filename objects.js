let user={ name: 'Raju', email:'raju@mail.com',password: '5212454'};

console.log(user.name);
console.log(user['email']);

user.address="Lucknow";
console.log(user);

user.email='raju@hotmail.com'
console.log(user);

delete user.password;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

let smartphone ={
    brand: 'samsung',
    model: 's23 Ultra',
    price: 78000,
    color:'White,Black'
}

console.log(smartphone.color);

smartphone.color=['white','Black','Red'];

console.log(smartphone.color);
console.log(smartphone.color[2]);

smartphone.color.push('blue');
console.log(smartphone);