let trainer={
    name:'Arindam',
   doTeach:function(){
       console.log(this.name+' is teaching...');
      let askQues=function(q){
          console.log(this.name+' is answring '+q);  
      }
     /*  let askQues=(q)=>{ // =>
          console.log(this.name+' is answring '+q);
       }*/
       console.log(this.name+' teaching ends');        
       return askQues;
   }   
}


var t1={name:'James'};
var t2={name:'Bukcy'};
var t3={name:'Praveen'};

var askQuestion=trainer.doTeach();
askQuestion.call(t1,'Q1');
askQuestion.call(t2,'Q2');
askQuestion.call(t3,'Q3');

//-----------------------------------

function Person(name,age)
{
   this.name=name;
    this.age=age;
   let incAge=function(){
       this.age=0;
       console.log(this.name+' -> '+this.age); 
   }
   
}
setInterval(incAge,1000);
let p =Person('Praveen',67);
p();



