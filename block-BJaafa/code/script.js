let word=document.querySelector("h2");
let meaning=document.querySelector("p");
let button=document.querySelector("button");
word.className="kbd";
meaning.className="meaning";
function generateRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function handleClick(){
    let randomIndex = generateRandomNumber(data.length);
    let randomWord = data[randomIndex];
    word.innerText = randomWord.word;
    meaning.innerText = randomWord.meaning;
}
handleClick();

button.addEventListener("click",handleClick);