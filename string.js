
// Variables ******************* 

// let name = 'Ian'; 
// let age = 36; 
// console.log(name, age);  

//const  (cannot overwrite)

// alert("Hello world!")  

// ************************** Strings ********************  

// let phrase = "This is a string!";
// phrase = "assigning new value to the string"; 
// console.log(phrase);

// console.log('value of index 0 is letter', phrase[0]); 

// console.log('Return the length of the string including sapaces', phrase.length); 
  


// concatenation  

// let firstName = 'Ian'; 
// let lastName = 'Pumatay' 
// let email = '@email.com'
// let username = firstName + '.' + lastName  + '' + email 
// console.log(username)   

// let title = 'Learning Javascript';
// let likes = 100;
// let author = 'Ian';

// let concatString = 'The blog called ' + title + ' by: ' + author + ' has ' + likes + ' likes.'
// console.log(concatString)

// // template string 

// let templateString = `The blog called ${title} by: ${author} has ${likes} likes.` 
// console.log(templateString) 

// // creating html template 

// let html = `
//   <h1>${title}</h1>
//   <p>by: ${author}</p>
//   <span>has ${likes} likes</span>
// ` 
// console.log(html)




// String methods

// let allCaps = username.toUpperCase();
// console.log('toUpperCase() method:',allCaps);

// let allSmall = username.toLowerCase();
// console.log('toLowerCase() method', allSmall); 

// let whatIndex = username.indexOf('n');
// console.log('indexOf() method returns the index of n:', whatIndex) 

// let whatIsLastIndex = username.lastIndexOf('m')
// console.log('lastIndexOf() method returns the index of last character m:', whatIsLastIndex) 
// console.log('confirming the last index of username:', username[20]) 

// let sliceEmail = username.slice(11,20)
// console.log('slice() method returns the letter of index 11 and 20:', sliceEmail); 


// let getSubstring = username.substring(0,11);
// console.log( 'substring() method returns:', getSubstring ); 

// let correctLetter = username.replace('P','B')
// console.log('replace() method:',correctLetter)  




 













// *************** Arrays ***************  

//let family = ["Ian", "Jada","Jade", "Baby"]; 

// console.log(family)

// console.log(family[0] = "Bugoy")

// family = ["Dad","Mom","Daughter","Baby"];

// console.log(family); 

// console.log(family[0]); 

// let together = family.join("-");
// console.log(together); 

// let getIndexOf = family.indexOf("Jade");
// console.log(getIndexOf); 

// let numbers = [1,2,3,4,5] 
// console.log(numbers);

// numbers = [6,7,8,9,10]; 
// console.log(numbers); 

// let numbersConcat = numbers.concat([11, 12, 13, 14, 15,])
// console.log(numbersConcat)

//let pushNumbers = numbers.push(100); //returns the length of the new array(alters the original value)
// console.log(pushNumbers); 
// console.log(numbers)

// let popNumbers = numbers.pop(); 
// console.log(popNumbers);
// console.log(numbers)



// Control Flow ****************************

// for loops 

// for(let i = 0; i < 5; i++){
//     console.log(i)
// } 

// for(let i = 0; i < 5; i++){
//     console.log( i )
// }  

// const names = ["Ian", "Jada", "Jade", "Baby"]; 

// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// } 

// for(let i = 0; i < names.length; i++){ 
//     // console.log(names[i]) 
//     let html = `<div>${names[i]}<div>`
//     console.log(html)
// } 

// while loops 

// let i = 0; 

// while(i < 5){
//     console.log(i);
//     i++
// }


// let i = 0; 

// while(i < names.length){ 
//     console.log("in loop " + names[i]); 
//     i++;
// } 


// -------- if and else ---------- 

// let age = 30

// if(age == 36){
//     console.log("You are getting old") 
// }else{
//     console.log("your a baby")
// } 

// let password = "@@@22222222222222"; 

// if(password.length >= 12 && password.includes('@')){
//     console.log("Strong!");
// }else if(password.length >=8 || password.includes("@")){
//     console.log("OK!");
// }else{
//     console.log("Weak!");
// } 

// const speak = function(name){
//     console.log(`Hello ${name}`);
// }; 

// speak(); 

// -------- Switch statement ---------- 

// let grade = "D"; 

// switch(grade){
//     case "A":
//         console.log("A")
//         break;

//     case "B":
//         console.log("B")
//         break;

//     case "C":
//         console.log("C")
//         break;
//         default:
//             console.log("not a valid grade")

// } 


// Function ****************************************** 

// function declaration
// function declareFunc(){
//     console.log("this is function decleration");
// } 

// declareFunc(); 

// // function expression   
// const expressFunc = function(){
//     console.log("this is a function expression")
// }; 

// expressFunc(); 

// return 

// const calArea = function(radius){
//      let area = 3.14 * radius**2
//      return area
// }

// // const area = calArea(5); 
// // console.log(area);  

// const calArea = function(radius){
//   return 3.14 * radius**2
// };

// const area = calArea(5);  
// console.log(area) 

// // Arrow function 

// // const arrowFunc = () => {
// //   console.log("This is a arrow function")
// // };  

// // arrowFunc(); 

// const bill = function(products, tax){
// let total = 0;
//     for(i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     };
//     return total;
// }; 

// console.log(bill([10,15,30], 0.2)) 







