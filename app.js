let input = document.querySelector('#input');
let add = document.querySelector('#add');
let clearAll = document.querySelector('#clear');
let todoAll = document.querySelector('#todo-section');

add.onclick = function(){
    if(!input.value){
        alert('Enter a task please')
    } else{
        
        let tasktodo = document.createElement('div');
        tasktodo.classList.add('tasktodo');
        todoAll.append(tasktodo);

        let left = document.createElement('div');
        left.classList.add('left');
        tasktodo.appendChild(left);

        let cb = document.createElement('input');
        cb.classList.add('cb');
        cb.type = 'checkbox';
        left.appendChild(cb);

        let tasktext = document.createElement('p');
        tasktext.classList.add('tasktext');
        left.appendChild(tasktext);
        tasktext.innerText = input.value;

        let right = document.createElement('div');
        right.classList.add('right');
        tasktodo.appendChild(right);

        let icon = document.createElement('button');
        icon.classList.add('sil');
        icon.innerText= "❌";
        right.appendChild(icon);

        input.value = '';

        icon.addEventListener('click', ()=> {
            todoAll.removeChild(tasktodo)
        })

        clearAll.addEventListener('click', ()=>{
            document.querySelector('.container_up').removeChild(todoAll)
            location.reload()
        })

    }
}

input.addEventListener('keydown', (e)=>{
    if(e.keyCode == 13){
        add.click();
        
    }
})

clearAll.addEventListener('keydown', (e)=> {
    if(e.keyCode == 127){
        todoAll.removeChild();
    }
})

clearAll.addEventListener('click', ()=>{
    
})