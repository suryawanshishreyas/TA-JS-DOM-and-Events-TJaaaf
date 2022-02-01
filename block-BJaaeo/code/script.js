let sumOperator= document.querySelector('.operator');
console.log(sumOperator);
let resultText= document.querySelector('.result-text');
console.log(resultText);
let a,b=0;
// Arithmetic operations
function main(){
    resultText.innerText=0;
    function display(value){
        resultText.innerText=value;
        return resultText.innerText;
    }
    function handleClick(result){
        resultText.innerText=result;
    }
    function equalResetForSingleInput(value){
        resultText.innerText=value;
        handleClick(value);
    }
    function a(value){
        resultText.innerText=value;
        let a=value;
        return a;
    }
    function b(value){
        resultText.innerText=value;
        let b=value;
        return b;
    }
    // function handleNumbers(num,value){
    //     num=[];
    //     num.push(value);
    //     return num.reduce(elm=>{
    //         for(i=0;i<elm.length;i++){
    //             elm[i]+=elm[i+1];
    //         }
    //     })
    // }
    function sum(a,b){
        return a+b;
    }
    function sub(a,b){
        return a-b;
    }
    function mul(a,b){
        return a*b;
    }
    function div(a,b){
        return a/b;
    }
    //taking number into account
    let numInput=document.querySelector('.numbers');
    console.log(numInput);

    //taking operations into account
    let addOp=document.querySelector('.add');
    console.log(addOp);
    let subOp=document.querySelector('.sub');
    console.log(subOp);
    let mulOp=document.querySelector('.mul');
    console.log(mulOp);
    let divOp=document.querySelector('.div');
    console.log(divOp);
    
    //taking previous value into account
    var previousValue='';

    //Adding event on numbers

    numInput.addEventListener('click',function(event){
    let firstNumber=event.target.innerText;
    console.log(firstNumber);
    //until user clicks on any operations
    firstNumber = previousValue + firstNumber;
    previousValue=firstNumber;
    a(firstNumber);
    
    if(event.target.innerText==='C'){
        display(0);
        resultText.innerText=0;
        firstNumber=0;
        previousValue=0;
    }
    else if(event.target.innerText==='.'){
        if(firstNumber==" "){
            firstNumber='.' + firstNumber + previousValue;
        }
        else{
            firstNumber= previousValue + firstNumber + '.' ;
        }
    }
    else if(event.target.innerText==='='){
        let newNum=firstNumber.replace('=','');
        equalResetForSingleInput(newNum);
        previousValue='';
    }
    else{
        
        display(firstNumber);
    }
    })

    // clicking on any operation
    addOp.addEventListener('click',function(event){
        let operator=event.target.innerText;
        resultText.innerText=resultText.innerText + operator;
    })
    subOp.addEventListener('click',function(event){
        let operator=event.target.innerText;
        resultText.innerText=resultText.innerText + operator;
    })
    mulOp.addEventListener('click',function(event){
        let operator=event.target.innerText;
        resultText.innerText=resultText.innerText + operator;
    })
    divOp.addEventListener('click',function(event){
        let operator=event.target.innerText;
        resultText.innerText=resultText.innerText + operator;
    })
//considering previous number for second input
// pValue='';

// for next number
    // numInput.addEventListener('click',function(event){
    //     let secondNumber=event.target.innerText;
    //     console.log(secondNumber);
    //     //until user clicks on any operations
    //     secondNumber = previousValue + secondNumber;
    //     pValue=secondNumber;
    //     b(secondNumber);
        
    //     if(event.target.innerText==='C'){
    //         display(0);
    //         resultText.innerText=0;
    //         secondNumber=0;
    //         pValue=0;
    //     }
    //     else if(event.target.innerText==='.'){
    //         if(secondNumber==" "){
    //             secondNumber='.' + secondNumber + pValue;
    //         }
    //         else{
    //             secondNumber= previousValue + secondNumber + '.' ;
    //         }
    //     }
    //     else if(event.target.innerText==='='){
    //         let newNumb=secondNumber.replace('=','');
    //         equalResetForSingleInput(newNumb);
    //         pValue='';
    //     }
    //     else{
    //         display(secondNumber);
    //     }
    //     })








}
main();