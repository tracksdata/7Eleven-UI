"use strict"
var person={name:'Ria',age:87}

//person.name='James';

//Object.defineProperty(person,"name",{configurable:false,writable:false})
//Object.defineProperty(person,"age",{configurable:false,writable:false})


//person.name='James';

//delete person.name;

//Object.preventExtensions(person);

//Object.seal(person); // +Object.preventExtensions(person);
//Object.freeze(person); //  + Object.seal(person); // + Object.preventExtensions(person);
//person.addr='Hyd';
//person.age=37;
//person.sal=766;


/*
    Js-Obejcts can have 2 types of properties
    a. data properties
    b. accessor (set,get) properties

*/

var per={
    _name:'Praveen',
    age:35,
    

    set name(name){
        console.log('-- setter called');
        this._name=name;
    },

    get name(){
        console.log('--- getter called');
        return this._name;
    }

}

//per.name='James'; // setter
//console.log(per.name); // getter




