// map iterator

var numbers=[1,2,3,4,5,6,7,8];


var toDos=[
{id:1,title:'Sleep'},
{id:2,title:'Eat'},
{id:3,title:'Play'},
{id:4,title:'Work'},
];

// map always returns array / object array
// map is immutable
var editedArray=numbers.map(number=>(number+10));

//console.log(numbers);
//console.log(editedArray);

console.log(toDos);

function editTodo(id,newTitle){
   toDos= toDos.map(todo=>todo.id===id?Object.assign({},todo,{title:newTitle}):todo)  
}




