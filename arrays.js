// *************** Arrays ***************  

let family = ['Ian','Jada','Jade','Baby']; 
let age = [36,35,4,0]; 
console.log(family); 
console.log(age);

family[0] = 'Dad';
family[1] = 'Mom'; 
family[2] = 'Butsikik' 

console.log(family)

// Array methods 

let joinFam = family.join('='); 
console.log(joinFam); 

let indexFam = family.indexOf('Ian'); 
console.log(indexFam); 

let concatAge = family.concat(age);  
console.log(concatAge)
let concatFam = family.concat(['Grandma mama', 'Grand mommy']); // add the new array at the end 
console.log(concatFam); 

let pushFam = family.push('Grandma mama', 'Grand mommy');  // (distructive method) returns the length of the new array => 6
console.log(pushFam) 

let popFam = family.pop('Grandma mama', 'Grand mommy'); // pop out the last value of the array 
console.log(popFam); 

console.log(family) 

// Array methods  

// Fiter

const scores = [10,30,15,25,50,40,4];  


let filteredScore = scores.filter((score) => {
    return score > 20; 
}) 

console.log(filteredScore); 
console.log(scores) 

const users = [
    {name:'Ian',premium: true},
    {name:'Erwin',premium: false},
    {name:'Eric',premium: false},
    {name:'vulnet',premium: false}
];  

let filteredUsers = users.filter((user)=> {
    return user.name == 'Ian';
})

console.log(filteredUsers); 


Map method 

let prices = [20,10,30,25,15,40,80,5]; 

const mapPrices = prices.map((price)=> {
    return price
    return price / 2
}); 

console.log(mapPrices); 

const fruits = [
    {name:'banana', price: 5},
    {name:'avocado', price: 4},
    {name: 'water melon', price: 6},
    {name: 'grapes', price: 7}
];

const mapFruites = fruits.map((fruit)=>{
    if(fruit.price > 5){
        return {name: fruit.name, price: fruit.price / 2};
    }else{
        return fruit;
    }
});

console.log(mapFruites); 

// find method  

const numbers = [10,30,15,25,50,40,4,3];   

const findNumbers = numbers.find((number)=>{
    return number < 5;
}); 

console.log('find number that is less than 5:', findNumbers);
