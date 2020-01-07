
let numbers=[34,22,87,54,65,32,98];
//console.log(numbers);

//function display(number){
  //  console.log(number);
//}

//for(var i=0;i<numbers.length;i++){
  //  display(numbers[i]);
//}

numbers.forEach(num=>console.log(num)); // recursive function
// find nhumber 87 present in the array 
console.log('-----------------------------');

//numbers.forEach(n=>{
  //  if(n===87){
    //console.log('Number found '+n);
    //return;
    //}
//})

let r=numbers.filter(n=>(n===87));
//console.log('Result: '+r);


