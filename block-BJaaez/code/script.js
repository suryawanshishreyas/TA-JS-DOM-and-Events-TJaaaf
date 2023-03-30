let key=document.querySelector("h2");
let description=document.querySelector("p");
let button=document.querySelector("button");
key.className="kbd";
function generateRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function handleClick(){
    let randomIndex = generateRandomNumber(data.length);
    let randomShortcut = data[randomIndex];
    key.innerText = randomShortcut.shortcut;
    description.innerText = randomShortcut.description;
}
handleClick();

button.addEventListener("click",handleClick);