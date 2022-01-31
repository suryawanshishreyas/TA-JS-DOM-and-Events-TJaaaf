let elm=document.querySelector('.grid.container');
for(i=1;i<501;i++){
    let item=document.createElement(`div`);
    elm.append(item);
    let h2=document.createElement('h2');
    item.append(h2);
    h2.innerText=Math.floor(Math.random()*500);
    h2.style.backgroundColor=Math.floor
};

function generateRandomColor(){
    let hexCharacters=[
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'
    ]
let color='#';
for(i=0;i<=15;i++){
    let randomNumber=Math.floor(Math.random()*16);
    color=color + hexCharacters[randomNumber];
}
return color;
}
let allh2Elm=document.querySelectorAll('h2');

let allElm=[...allh2Elm];
function mouseMove(){
    allElm.forEach(function changeColor(elm){
        let randomColor=generateRandomColor();
        return elm.style.backgroundColor=randomColor;
    });
};

elm.addEventListener("mousemove", mouseMove);