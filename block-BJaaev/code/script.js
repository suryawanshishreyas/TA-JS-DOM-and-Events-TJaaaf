// Code By Shreyas Suryawanshi
    let inputText= document.querySelector("#text");
    let root=document.querySelector('ul');
    console.log(inputText);
    let allTodos= [];
    
    
    function handleInput(event){
    let value=event.target.value;
    if(event.keyCode === 13 && value !== ""){
        let todo={
            name: value,
            isDone: false,
        };
        allTodos.push(todo);
        event.target.value="";
        createUI(allTodos,root);
    }
   
    }
    
    function handleDelete(event){
        let id=event.target.dataset.id;
        allTodos.splice(id,1);
        createUI(allTodos,root);
    }
    
    function handleToggle(event){
    let id=event.target.dataset.id;
    allTodos[id].isDone=!allTodos[id].isDone;
    createUI(allTodos,root);
    
    }

    function handleActive(event){
        let result=allTodos.filter(element=>element.isDone===false);
        createUI(result,root);
    }
    
    function handleCompleted(event){
        let result=allTodos.filter(element=>element.isDone===true);
        createUI(result,root);
    }

    function handleAll(event){
        createUI(allTodos,root);
    }

    function createUI(data, rootElm){
        root.innerHTML="";
        data.forEach((todo,index)=>{
        let li=document.createElement('li');
        let div=document.createElement('div');
        let input=document.createElement('input');
        input.checked=todo.isDone;

        /* Buttons to appear Once*/
        if(allTodos.length===1){
            createButtons();
        }

        /* adding input event listener */
        input.addEventListener('input',handleToggle);
        input.setAttribute('data-id',index);

        let label=document.createElement('label');
        let p=document.createElement('p');
        let span=document.createElement('span');
        div.classList.add('round');
        input.setAttribute('type','checkbox');
        input.setAttribute('id','checkbox');
        input.setAttribute('name','');
        label.setAttribute('for','checkbox');
        p.innerText=todo.name;
        span.innerText="X";
        span.setAttribute('data-id',index);

        /* Adding span event listener */
        span.addEventListener('click', handleDelete);
        div.append(input, label);
        li.append(div, p, span);
        rootElm.append(li);
        })
        
    }
    
    function createButtons(){
        
        let ul=document.createElement('ul');
        ul.classList.add('taskbar');
        let li=document.createElement('li');
        li.classList.add('task');
        let div=document.createElement('div');
        div.classList.add('button');
        let button1=document.createElement('button');
        button1.classList.add('btn-active');
        button1.innerText="Active"
        let button2=document.createElement('button');
        button2.classList.add('btn-completed');
        button2.innerText="Completed";
        let button3=document.createElement('button');
        button3.classList.add('btn-all');
        button3.innerText="All";
        div.append(button1,button2,button3);
        li.append(div);
        ul.append(li);
        document.querySelector('body').append(ul);
    
        
        /*If clicked on Active*/
        button1.addEventListener('click',handleActive);

        /*If clicked on Completed */
        button2.addEventListener('click',handleCompleted);

        /*If clicked on All */
        button3.addEventListener('click',handleAll);
        
    }
    function removeALl(){
        if(allTodos.length===0){
        button1.remove();
        button2.remove();
        button3.remove();
    }
    }
    inputText.addEventListener("keyup",handleInput);
    


