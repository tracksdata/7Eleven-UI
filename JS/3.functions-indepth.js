/*
    We can create functions in two ways
    a. function declarations - named functions
        --> always get lifted up (hoisted) function obj at context-creation phase
    when to use?
        -> to create function object at the time of context ctreation phase
    
    
    b. function expressions
        -> always get executed at context execution phase
    when to use?
        -> to create a function at context-execution phase (based on event,input, condition)
    
    
*/

// 1. function declarations (named functions)
//console.log('Addition is '+add(100,200)); 
// add is a function already hoisted with function-obj 


  //function add(n1,n2){
    //  return n1+n2;
 // }



 // 2. function expressions (Anonymos functions)

 //var add=function(n1,n2){
   //  return n1+n2;
// }

 //console.log(add(10,200));

 // function as values:

 //function sayHello(){
   //  console.log('--- Hello');
 //}
 //sayHello();

 //var sayHello=function(){
   //  console.log('-- Hello..');   
 //}

 //sayHello is a function. Because sayHello is hoildinga function.

//var sayHi=sayHello; // as Value
// Note: sayHi also a function, because it is storing/holding another function name
//sayHi();

// functions as args

var arr=[1,3,5,70,9,2,4,6,8,10];

//arr.sort();

/*

10 ,7 , 4, 8
10>7 ? 
7 10 4 8
7> 4

4 10 7 8

4 > 8
10> 7
4 7 10 8
10 >8
4 7 8 10


*/


//arr.sort(function(x,y){
  //  return x-y; // value may be, 0, positive or negative number
//})

//console.log(arr);

// function with return-value

function teach(){ //parent
    var notes='Js-Notes';

    var learn=function(){ // child
        console.log('learning '+notes); 
    }
    learn();
}

//teach();
//teach();
//teach();
//teach();

function doTeach(){ // Parent

    console.log('Trainer Praveen is teaching js session');

    var doTask=function(){ // child function
        console.log('-- Doing a task for js');
    }

      doTask();
}

var t1=doTeach();
//doTeach();
//doTeach();

//t1();
//t1();
//t1();
//task(); // clousers  -> child still can exute even parent function is finished
//task();
//task();
//task();


 
//var t2=function(){  // expression - context-execution phase
  //  console.log('-- t2'); 
//}
//t2();

// problems of var 

 function f(){
     {
         var v=100;
     }
     console.log('v is '+v);
     
 }

 //f();

 var i=98;
 var i=65;
 var i=632;

 // es 6 -  let

 let n=65;
 //let n=78;

function f1(){
     {
         let v=100;
         console.log('v is '+v);

     }
     
 }
 f1();


 //f11();

 function f11(){
     console.log('kkk '+a11);
     
 }
 let a11;



//var f333=aaa();
var aaa=function(){
console.log('--- t1');

        function f2222(){
            console.log('t2');

        }
        return f2222;
    }



