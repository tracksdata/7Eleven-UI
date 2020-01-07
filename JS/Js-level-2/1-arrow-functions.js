"use strict"

//let getPrice=function(){
  //  return 5000;
//}

//console.log(getPrice());

//let getPrice= ()=>{
  //  return 7000;
//}

//let getPrice=() => 8000;
//let getPrice=() =>{
  //  console.log('my function');
    //return 100;
    
//}

//function sayHi(){
  //  console.log('-- hi');
//}

//sayHi();

//let fun=()=>console.log('hello');
//let f1=()=>{
  //  console.log('stamt1');
    //console.log('stmt2');
//}
//console.log(getPrice());
//f1();

//let sum=function(a,b){
  //  return a+b;
//}

//console.log(sum(3,5));
//console.log(sum(30,50));

//let sum=(a,b)=>{
  //  return a+b;
//}

//let sum=(x,y)=>x+y;
//console.log(sum(1000,2000));

//-----------------------------------
// when i should use arrow function?
//-----------------------------------


// 1. to keep compavct function arguments

let numbers=[1,3,5,7,9,2,4,6,8,10];

//numbers.sort(function(x,y){
  //  return x-y;
//});

// or

//numbers.sort((x,y)=>{
  //  return x-y;
//});

numbers.sort((x,y)=>x-y)

//console.log(numbers);

//-----------------------------------------
let trainer={
    name:'Praveen',
    doTeach:function(){
        console.log(this.name+' is teaching...');
      // let askQues=function(q){
        //   console.log(this.name+' is answring '+q);  
       // }

        let askQues=(q)=>{
            console.log(this.name+' is answring '+q);
        }

        console.log(this.name+' teasching ends');
        
        return askQues;
    }
   
}

//let askQues1=trainer.doTeach();
//

// dynamic binding
//askQues1.call(trainer,'Q1');
//askQues1.call(trainer,'Q2');
//askQues1.call(trainer,'Q3');
//askQues1('Q1');
//askQues1('Q2');
//askQues1('Q3');
//let newTrainer={name:'Raj'}
//askQues1.call(newTrainer,'Q4');


//askQues.call(trainer,'Q1');

//askQues.call(newTrainer,'Q3');   // will not bind to new trainer

// Quiz-1


//let regFun=function(){
  //  console.log(this);
//}
//regFun();

// --> arrow-function always belongs/bind to creator 



let arrowFun=()=>{
    console.log(this); 
}

//arrowFun(); // creator is a global object-> window

 
//function Person(name,age){
  //  this.name=name;
    //this.age=age;

   // let incAge=function(){
     //   this.age++;
       // console.log(this.name+' -> '+this.age); 
   // }
   // setInterval(incAge.bind(this),1000);

   //let incAge=()=>{
     //  this.age++;
       //console.log(this.name+' -> '+this.age); 
  // }
   //setInterval(incAge,1000);

//}

//new Person('Praveen',87);




