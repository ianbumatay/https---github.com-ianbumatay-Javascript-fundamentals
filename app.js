const firstpar = document.querySelector('p');
// console.log(firstpar.innerText); 

firstpar.innerText = 'This is the first pharagraph' 

const paras = document.querySelectorAll('p') 
// console.log(paras) 
paras.forEach(para =>{
    // console.log(para.innerText);
    para.innerText += ' appending text'
}) 

const content = document.querySelector('.content');
console.log(content);
content.innerHTML = '<h1>Updating inner HTML</h1>' 

// numbers = [50,20, 1,5,10,8] 

// numbers.sort((a,b)=> a - b); 
// console.log(numbers)