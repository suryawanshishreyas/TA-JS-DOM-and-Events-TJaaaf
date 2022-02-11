let form=document.querySelector('form');
let container=document.querySelector('.container');
console.log(container);

function handleAdd(event){
    event.preventDefault();

    //creating li,ul,and div elements using documentCreate
    let movies=document.createElement('div');
    movies.classList.add('movies');
    movies.setAttribute('name','movies');
    let ul=document.createElement('ul');
    let li=document.createElement('li');
    let input=document.createElement('INPUT');

    // Creating close button
    let closeButton=document.createElement('button');
    closeButton.classList.add('btn');
    closeButton.setAttribute('onclick',check())
    let imbed=document.createElement('i');
    imbed.className='fa fa-close';
    closeButton.append(imbed);

    //Setting attribute to input element
    input.setAttribute('type','checkbox');
    input.setAttribute('name','box');
    input.setAttribute('value','false');
    input.className='box';
    let label=document.createElement('label');

    //Setting attribute to label element
    label.setAttribute('for','box');
    
    //Adding li,ul and div movies to container
    li.append(input);
    li.append(label);
    li.append(closeButton);
    ul.append(li);
    movies.append(ul);
    container.append(movies);
    event.target.nextElementSibling=movies;
    // console.log(event.target.ParentElement);

    //adding inner text to label
    label.innerText=event.target.elements.moviename.value;

    //function check()
    function check(){
        input.checked=true;
    }
    // event Listner on closeButton
    closeButton.addEventListener('click',function(){
        input.checked=false;
    })
    

}
form.addEventListener('submit',handleAdd);
