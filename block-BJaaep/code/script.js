/* With Event Delegation */
let root1=document.querySelector('.wrapper');

// Creating Numbers Array 

let numbers=[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
];

let ul=document.createElement('ul');
ul.classList.add('boxes');


// For Each number create a box li and adding event listener to it
numbers.forEach(number=>{
    let randomNumber=Math.floor(Math.random()*12);
    let li=document.createElement('li');
    li.classList.add('box');
    ul.append(li);
    root1.append(ul);
    li.addEventListener('click', function(){
        li.innerText=randomNumber;
    })
});
/*------------------------------------------------------------------------------------------------*/

/* With Event Deligation */
let root2=document.querySelector('.wrapper2');
let ul2=document.createElement('ul');

ul2.classList.add('boxes');

numbers.forEach(number=>{
    let randomNumber2=Math.floor(Math.random()*12);
    let li2=document.createElement('li');
    li2.classList.add('box');
    let h2=document.createElement('h2');
    li2.append(h2);
    ul2.append(li2);
    root2.append(ul2);
    li2.addEventListener('click', function(event){
        handleClick(randomNumber2,event);
    })
    function handleClick(numberText,e){
        if(e.ctrlKey === true){
            h2.innerText=numberText;
        }
        else{
            
            h2.innerText="Use Ctrl Key to Reveal";
        
        }
        
    }
    
});









