/*

    function binding
    ------------------

    ==> executing the function by an object.
    can bind function to an object in 2 ways.

    1. static 
    2. dynamic
*/

// 1. static function-binding

//var n=10; // glabal contexct
function f1(){ // f1 context
    //var n=20;

     function f2(){ // child context of f1 <- f2 context
        // var n=30; // 1 st preference for local variable
        // 2nd preference is parent of its context
        // 3rd preference is parent of f1 conetxt
        // final preference is parent contect --> window object
         console.log('N: '+n);  
     }
     return f2;
}

//var f=f1();
//f();

//-----------------------------------------

var ename='Ozvitha';
var emp={ // emp is an object which belongs to a global context
    ename:'Praveen',
    age:76,

    sayName:function(){ // sayName is a paret function. and context is sayName
        var ename='James'; // local property of sayName function. Not in object
        console.log('name is '+emp.ename); // priority is from obejct
        console.log('name is '+ename); // priority is local variable with in sayName context
         console.log('name is '+this.ename);

         sayHi=function(){ // sayHi is child of sayName context
           var ename='Bucky wall';
             console.log('--- I am saying hi....'+ename);  
         }

         return sayHi;
        
    },
    addr:'Hyderabad'
}

/*
NOTES
-------
1. in js , if you are calling an attibute/variable/property in an object, then 
   you must call that property with object-name.name-of-property
*/

//var f=emp.sayName();
//f();
// parent of global comtext is window, and name is blank in window object
// parent of sayNameforAll
function sayNameForAll(){
    //?
    console.log('i am '+this.name); // this means who is calling this function
}

let p1={
    name:'Praveen',
    sayName:sayNameForAll
}

let p2={
    name:'Bucky',
    sayName:sayNameForAll
}

//p1.sayName();
//p2.sayName();

//delete p1.sayName

//-----------------------------------
// 2. dynamic function-binding
    // 3 ways => call, apply , bind
//-----------------------------------
let tnr1={name:'Praveen'}
let tnr2={name:'James'}

function doTraining(sub,duration,location){ 
    var trainer='Praveen';
    //console.log('The '+this.name+' is teaching '+sub+' having '+duration+' duration '+' in '+location+' location');
    console.log(`The Trainer ${this.name} is teaching ${sub} in ${duration} weeks at ${location}`);
    
    
    
    
}


// way 1 =>  call()
//doTraining.call(tnr1,'.js','10','Kolkata');
//doTraining.call(tnr2,'Java','30','Pune');


// way- 2 ==>  apply

//doTraining.apply(tnr1,['java script',10,'Kolkata']); // new  context created
//doTraining.apply(tnr1,['java',10,'Kolkata']); // new  context created
//doTraining.apply(tnr1,['cpp',10,'Kolkata']); // new  context created

//doTraining.apply(tnr2,['php',20,'Kolkata']); // new  context created

// way - 3 ==> bind 

var fun1=doTraining.bind(tnr1); // parent contect is created...
//fun1('.js',20,'Hyderabad'); // no new context is created
//fun1('java',10,'Pune'); // no new context is created
//fun1('php',1,'Kolkata');

var fun2=doTraining.bind(tnr2);
//fun2('cpp',15,'Bangalore');
//fun2('c',2,'Kolkata');

// Can we overload function in .js language?
// Ans : No


function getFood(){  // in the stack memory a new memory block wiyh name 'getFood' created
    return 'No Food';
}

function getFood(pay){// in the stack memory a new memory block wiyh name 'getFood' created
 if(arguments.length==0){
     return 'No Food';
 }  
return 'Biryani';
}

//console.log(getFood()); // ? 


function getFood(){
    return{
        name:'Mini Tiffien',
        ename:'Praveen',
        location:'Hyderabad',
        sayHi:function(){

        }
    }
}

//var food=getFood();
//console.log(food);











