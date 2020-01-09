// filter is a immutable

var numbers=[1,2,3,4,5,6,7,8];
var toDos=[
{id:1,title:'Sleep'},
{id:2,title:'Eat'},
{id:3,title:'Play'},
{id:4,title:'Work'},
];
// copy any even numbers into a new array
// use filer . always creats a new array from a condition

var evenArray=numbers.filter(number=>number%2===0)
var oddArray=numbers.filter(number=>!(number%2===0))

//console.log(evenArray);
//console.log(oddArray);
//console.log(numbers);

// copy a todo object into a new object which matches the given todo id

console.log(toDos);

function findTodo(id){
   var resultTodo=toDos.filter(todo=>todo.id===id);
   console.log(resultTodo);
}
console.log('------------');





//var a=2; // number
//var b=2; // number
//if(a===b){
  //  console.log('true');
//}else{
  //  console.log('false');
    
//}

