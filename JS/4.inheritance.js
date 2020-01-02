function Person(name,age){
    this.name=name;  
    this.age=age;

   
    /*sayName=function(){
        console.log('I am '+name);
    }

    sayAge=function(){
        console.log('i am '+age+' yeals old');
    }
    

    return{
        sayName:sayName,
        sayAge:sayAge
    }
    */
}

//var p1=Person('Praveen',87);
//var p2=Person('James',65);

//p1.sayName();
//p1.sayAge();

//p1.sn();
//p1.sa();

//p2.sn();
//p2.sa();

Person.prototype.sayName=function(){
    console.log('I am '+this.name);   
}

Person.prototype.sayAge=function(){
    console.log('I am '+this.age+' years old');   
}

var p1=new Person('Praveen',87);
var p2=new Person('James',65);


p1.sayName();
p1.sayAge();

p2.sayName();
p2.sayAge();



