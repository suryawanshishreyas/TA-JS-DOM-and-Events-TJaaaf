// Selecting scores of both Player and Computer
const playerScoreEl=document.querySelector('.playerScore');
const computerScoreEl=document.querySelector('.computerScore');

// Selecting choice display of both Player and Computer
const playerChoiceEl=document.querySelector('.playerChoice');
const computerChoiceEl=document.querySelector('.computerChoice');

// Selecting Each Element Of Player
const playerRock=document.getElementById('playerRock')
const playerPaper=document.getElementById('playerPaper');
const playerScissors=document.getElementById('playerScissors');
// const playerLizard=document.getElementById('playerLizard');
// const playerSpock=document.getElementById('playerSpock');

// Selecting Each Element Of Computer
const computerRock=document.getElementById('computerRock');
const computerPaper=document.getElementById('computerPaper');
const computerScissors=document.getElementById('computerScissors');
// const computerLizard=document.getElementById('computerLizard');
// const computerSpock=document.getElementById('computerSpock');

const icons=document.querySelectorAll('.fa');
const resultText=document.querySelector('.result-text');

//creating an array of objects using algorithm
const choices={
    rock:{name:'Rock', defeats:['scissors']},
    paper:{name:'Paper', defeats:['rock']},
    scissors:{name:'Scissors',defeats:['paper']}
}

//initializing playerScore and ComputerScore to 0.
let playerScoreNumber=0;
let computerScoreNumber=0;
let computerChoice=" ";

//creating a reset function to reset the game
function resetGame(){
    playerScoreNumber=0;
    computerScoreNumber=0;
    playerScoreEl.textContent=playerScoreNumber;
    computerScoreEl.innerText=computerScoreNumber;
    playerChoiceEl.innerText=" ";
    computerChoiceEl.innerText=" ";
    resultText.innerText=" ";
}

//randomize Computer Choice
function computerRandomChoice(){
    const computerChoiceNumber=Math.random();
    if(computerChoiceNumber<0.3){
        computerChoice='rock';
    }
    else if(computerChoice<=0.6){
        computerChoice='paper';
    }
    else{
        computerChoice='scissors';
    }
}

//displaying computer Choice
function displayComputerChoice(){
    switch(computerChoice){
        case 'rock':
            computerChoiceEl.textContent='--Rock';
            break;
        case 'paper':
            computerChoiceEl.textContent='--Paper';
            break;
        case 'scissors':
            computerChoiceEl.textContent='--Scissors';
            break;
        default:
            break;

    }
}

//Checking result and updating scores
function updateScore(playerChoice){
    if(playerChoice===computerChoice){
        resultText.innerText="Its a tie";
    }
    else{
        const choice=choices[playerChoice];
        if(choice.defeats.indexOf(computerChoice)>-1){
            resultText.innerText='You Won';
            playerScoreNumber++;
            playerScoreEl.innerText=playerScoreNumber;
        }
        else{
            resultText.innerText('You Lost');
            computerScoreNumber++;
            computerScoreEl.innerText= computerScoreNumber;
        }
    }
}

//calling functions
function checkResult(playerChoice){
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
}

//taking player selection values to compare with computer
let button=document.querySelector('.far');
button.addEventListener('click',function select(playerChoice){
    checkResult(playerChoice);
    switch(playerChoice){
        case 'rock':
            playerChoiceEl.innerText='--Rock';
            break;
        case 'paper':
            playerChoiceEl.innerText='--Paper';
            break;
        case 'scissors':
            playerChoiceEl.innerText='--Scissors';
            break;
        default:
            break;
    }
})