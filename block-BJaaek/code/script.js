let color=["#3C9EE7", "#E7993C", 
"#E73C99", "#3CE746", "#E7993C"];
let box1=document.querySelector('.box.first');

box1.addEventListener('click',function(){
    // let randomColor= Math.floor(Math.random()*16777215).toString(16);
    box1.style.backgroundColor=color[Math.floor(Math.random() * color.length)];
});

let box2=document.querySelector('.box.second');

box2.addEventListener("mouseover", function(){
    // let randomColor = Math.floor(Math.random()*1677215).toString(16);
    box2.style.backgroundColor=color[Math.floor(Math.random() * color.length)];
});