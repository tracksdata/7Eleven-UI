 //--------------------------------------------
// Todo => {id,title,completed}
//--------------------------------------------
class Todo {
    constructor(title) {
        Todo.nextId++;
        this.id = Todo.nextId
        this.title = title;
        this.completed = false
    }
}
Todo.nextId = 0;

isEdit=false;
//--------------------------------------------
// Todo-service
//--------------------------------------------

class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title);
        this.todos.push(newTodo);
    }
    editTodo(id, newTitle) {
        let todoToEdit = this.todos.find(todo => todo.id === id);
        todoToEdit.title = newTitle;
    }
    completeTodo(id) {
        let todoToComplete = this.todos.find(todo => todo.id === id);
        todoToComplete.completed = !todoToComplete.completed;
    }
    completeAll() {
        let areAllCompleted = this.todos.every(todo => todo.completed)
        this.todos.forEach(todo => todo.completed = !areAllCompleted);
    }
    deleteTodo(id) {
        let todoIndex = this.todos.findIndex(todo => todo.id === id);
        this.todos.splice(todoIndex, 1)
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
    }

    viewTodos(filter) {
        if (filter === 'ALL') {
            // this.todos.forEach((todo) => {
            //     console.log(todo);
            // })
            return this.todos
        }
        if (filter === 'ACTIVE') {
            return this.todos.filter(todo => !todo.completed)
               
                
        }
        if (filter === 'COMPLETED') {
           return this.todos.filter(todo => todo.completed)
                
        }
    }
}


const service = new TodoService();

service.addTodo("go home") // 1
service.addTodo("go shop") // 2
service.addTodo("go ???")  // 3

// // service.editTodo(3, "go gym")

//-------------------------------------
var isEdit=false;


if(service.todos.length==0){
    var x = document.querySelector(".card");
    x.style.visibility = "hidden";

}

function renderTodos(flag) {
    console.log('--- flag: '+flag);
    let active_todos_count=service.todos.reduce(((acc,todo)=>todo.completed?acc:acc+1),0)
    var liElements = service.viewTodos(flag).map((todo) => {
        console.log(todo);
        
        let liEle = `
            <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} data-id=${todo.id} class="toggle-check"/>
               <!-- <span class="badge badge-dark">${todo.id}</span> -->
                ${isEdit?`<input value='${todo.title}'/>`:`<span id='edit' >${todo.title}</span>`}
               <!-- <span class="badge badge-danger">${todo.completed}</span> -->
            </li>
        `
        return liEle;
    })
    document.getElementById('todos').innerHTML = liElements.join(" ")
    document.getElementById("items-left").innerHTML=active_todos_count
    document.getElementById("complete-all").checked=active_todos_count===0
}


renderTodos('ALL');

let new_todo_field = document.getElementById('new-todo')
new_todo_field.addEventListener('keyup', e => {

   
    if (e.which === 13) {
        let new_todo_title = e.target.value;
        service.addTodo(new_todo_title)
        e.target.value = ""
            var x = document.querySelector(".card");
            x.style.visibility = "visible";
            document.getElementById('items-left').innerHTML = service.todos.length
           
        renderTodos('ALL');
    }
})


// Event Delegation
let todos_list = document.querySelector('#todos')
todos_list.addEventListener('change', e => {
    let todo_id = e.target.getAttribute('data-id')
    service.completeTodo(Number.parseInt(todo_id))
    renderTodos('ALL')
})

let complete_all_check = document.querySelector('#complete-all')
complete_all_check.addEventListener('change', e => {
    console.log("complete all")
    service.completeAll();
    renderTodos('ALL')
})

let dislay_active=document.querySelector('#active');
dislay_active.addEventListener('click',e=>{
    console.log('-- only active');
    //service.viewTodos('ACTIVE');
    renderTodos('ACTIVE')
})


let dislay_completed=document.querySelector('#completed');
dislay_completed.addEventListener('click',e=>{
    console.log('-- only active');
    //service.viewTodos('ACTIVE');
    renderTodos('COMPLETED')
})

let edit=document.querySelector('#edit');
edit.addEventListener('dblclick',e=>{
    console.log('--- editing  '+e.target.value);
    isEdit=true;
    renderTodos('ALL')

    
})

let dislay_all=document.querySelector('#all');
dislay_all.addEventListener('click',e=>{
 
    //service.viewTodos('ACTIVE');
    renderTodos('ALL')
})

let clear_completed=document.querySelector('#clear-completed');
clear_completed.addEventListener('click',e=>{
 
    service.clearCompleted();
    renderTodos('ALL')
})