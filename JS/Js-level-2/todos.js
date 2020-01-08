/*
Object Types
1. Mutable  (content of the object can be changed)
2. Immutable (content of object can not be changed)
*/

// Model
class Todo{
    constructor(title){
        Todo.nextId++;
        this.id=Todo.nextId;
        this.title=title;
        this.completed=false;
    }
}
Todo.nextId=0;

// service

class TodoService{
    constructor(){
        this.Todos=[];
    }

    // add a new todo
    addTodo(title){
        let newTodo=new Todo(title);
        this.Todos=this.Todos.concat(newTodo); // cancat is immutable object
    }

    // complete todo function
    completeTodo(id){
        this.Todos=this.Todos.map(todo=>todo.id===id?Object.assign({},todo,{completed:!todo.completed}):todo);
    }

    // completeAll
    completeAllTodos(){
       let isAllCompleted=this.Todos.every(todo=>todo.completed); 
       // first time to.completed value is false,
       // in this case, isAllCompleted value will become false
       // second time...
       // if todo.completed value is true,
       // then is completed value will  not get assigned
      
       this.Todos=this.Todos.map(todo=>Object.assign({},todo,{completed:!isAllCompleted}))
    }

    // edit toDo
    editTodo(id,newTitle){
        this.Todos=this.Todos.map(todo=>todo.id===id?Object.assign({},todo,{title:newTitle}):todo)
    }

    //clear completed todos

    clearCompleted(){
        this.Todos=this.Todos.filter(todo=>!todo.completed)
    }

    // display all todos

    viewTodos(){
        this.Todos.forEach(todo => {
            console.log('Id: '+todo.id);
            console.log('Title: '+todo.title);
            console.log('Completed: '+todo.completed);  
        });
    }




}

// Create object and use service functions

let service=new TodoService();
service.addTodo('eat');
service.addTodo('sleep');
service.addTodo('play');








