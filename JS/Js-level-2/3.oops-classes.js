//function Employee(name){
  //  this.name=name;
    //function display(){
      //  console.log('name is '+name);
    //}
    //return display;
//}

//let e1=new Employee('Praveen');
//e1();

//----------------------
// ES - 6 class syntax
//---------------------

class SalariedEmployee{
    constructor(name){
        this.name=name;
    }
    displayEmployee(){
        console.log('name is '+this.name);        
    }
}

let e1=new SalariedEmployee('Raj');
e1.displayEmployee();



