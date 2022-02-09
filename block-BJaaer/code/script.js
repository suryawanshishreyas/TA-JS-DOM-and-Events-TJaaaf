let form=document.querySelector(".container");

let userInfo={};

function handleSubmit(event){
    event.preventDefault();
    
    userInfo.name=form.elements.name.value;
    userInfo.email=form.elements.email.value;
    userInfo.likes=form.elements.likes.value;
    userInfo.color=form.elements.color.value;
    userInfo.rating=form.elements.rating.value;
    userInfo.book=form.elements.drone.value;
    userInfo.terms=form.elements.terms.checked;
    //Creating New Element for Modal
    let newElm=document.createElement('div');
    newElm.classList.add('info');

    //adding form submissions to new elments inside newElm
    let name=document.createElement('h1');
    name.innerText="Hello ";
    name.classList.add("name");
    let email=document.createElement('h2');
    email.innerText="Email: "
    email.classList.add("email");
    let likes=document.createElement('h2');
    likes.innerText="You Love: "
    likes.classList.add("likes");
    let color=document.createElement('h2');
    color.innerText="Color ";
    color.classList.add('color');
    let rating=document.createElement('h2');
    rating.innerText="Rating: ";
    rating.classList.add('rating');
    let book=document.createElement('h2');
    book.innerHTML="Book Genre: "
    book.classList.add('book');
    
    //Creating second event of close button
    let closeButton=document.createElement('h2');
    closeButton.innerText="close";
    closeButton.classList.add('close');

    //checking whether input element terms is selected or not
    let terms=document.createElement('h2');
    if(form.elements.terms.checked===true){

        terms.innerText=`You agree to Terms and Conditions`;
    }
    else{
        terms.innerText="You do not agree to Terms and Conditions";
    }
    terms.classList.add('term');

    //adding all form elements in newElm
    newElm.append(closeButton,name,email,likes,color,rating,book,terms);
    name.append(userInfo.name);
    email.append(userInfo.email);
    likes.append(userInfo.likes);
    color.append(userInfo.color);
    rating.append(userInfo.rating);
    book.append(userInfo.book);
    console.log(newElm);
    form.append(newElm);

    //appending new Elm in container
    let container=document.querySelector('body');
    container.append(newElm);

    //removing parent HTML element after clicking submit
    let parent=document.querySelector('.container');
    parent.remove();
    
    //adding event for close button
    closeButton.addEventListener('click',handleClose);
    

}
function handleClose(event){
    event.preventDefault();
    let body=document.querySelector('body');
    body.append(form);
    form2=document.querySelector('.info');
    form2.remove();
}

form.addEventListener('submit',handleSubmit);
