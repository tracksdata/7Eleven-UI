const fs=require('fs');

// Blocking IO

/* const vegMenu=fs.readFileSync('./veg-menu.txt','utf8');
console.log('veg Items on Process id: '+process.pid);

console.log(vegMenu);

console.log('-------------');

const nonVegMenu=fs.readFileSync('./nonveg-menu.txt','utf8');
console.log('non veg Items on Process id: '+process.pid);
console.log(nonVegMenu);
 */

 // Non Blocking 

 /* fs.readFile('./veg-menu.txt','utf8',(err,items)=>{
     if(err){
         console.log('some issue '+err);
         return;
     }
     console.log(items);
 })

 
 fs.readFile('./nonveg-menu.txt','utf8',(err,items)=>{
    if(err){
        console.log('some issue '+err);
        return;
    }
    console.log(items);
}) */

// call back functions

let callback=(error,data)=>{
    if(error){
        console.log('some issue '+error);
        return;
    }
    console.log(data);
}

// IO-1
console.log(process.pid+' is reading veg menu');

fs.readFile('./veg-menu.txt','utf8',callback);
//IO-2
console.log(process.pid+' is reading non veg menu');
fs.readFile('./nonveg-menu.txt','utf8',callback);







