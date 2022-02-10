let form=document.querySelector("form");

let usernameError=" ";
let nameError=" ";
let emailError=" ";
let phoneError=" ";
let passwordError=" ";

function checkError(e,e2,e3,e4,e5){
    if(e===" " && e2===" " && e3===" " && e4===" " && e5===" "){
        alert('user added successfully!');
    }
}

function doesContainANumber(str){
   return str.split(' ').some(e=>Number(e));
}
function handleSubmit(event){
    event.preventDefault();
// For Username
    let usernameElm=event.target.elements.username;

    if(usernameElm.value.length<4){
        usernameError="username cant be less than 4 characters";
    }
    usernameElm.nextElementSibling.innerText=usernameError;
// For name
let nameElm=event.target.elements.name;


    if(doesContainANumber(nameElm.value)){
        nameError="You cant use numbers in name field unless you are son of Elon Musk";
    }
    nameElm.nextElementSibling.innerText=nameError;
//For Email
    let emailElm=event.target.elements.email;

    if(emailElm.value.length<5){
        emailError="Not a valid Email";
    }
    emailElm.nextElementSibling.innerText=emailError;

//For Phone Number
    let phoneElm=event.target.elements.phone;

    if(!doesContainANumber(phoneElm.value)){
        phoneError="Phone Numbers Can only be numbers";
    }else if(phoneElm.value.length<7){
        phoneError="Phone number cannot be less than 7 digits";
    }
    phoneElm.nextElementSibling.innerText=phoneError;

//For Password
    let passwordElm=event.target.elements.password;
    let confirmpasswordElm=event.target.elements.confirmpassword;

    if(passwordElm.value!=confirmpasswordElm.value){
        passwordError="Password and Confirm Password Must be Same";
    }
    confirmpasswordElm.nextElementSibling.innerText=passwordError;
    
    
    checkError(usernameError,phoneError,nameError,emailError,passwordError);
    setTimeout(function(){
        window.location.reload(1);
     }, 5000);
    
    
}

form.addEventListener('submit',handleSubmit);
