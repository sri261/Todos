const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search =document.querySelector('.search input');

const generateTemplate = (todo) =>{                  /*<---function to generate template string  */ 
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `
    list.innerHTML += html;
};

addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();             /*<---trim() used to remove white spaces form input  */ 
    
    if(todo.length){
         generateTemplate(todo);
         addForm.reset();                               /*<---reset input form  */ 
    }
});

//delete todos
list.addEventListener('click',e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const fliterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo)=>{
            todo.classList.add('filtered')
        });

    Array.from(list.children)
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo)=>{
            todo.classList.remove('filtered')
        });    
};

//keyup event
search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    fliterTodos(term);
});