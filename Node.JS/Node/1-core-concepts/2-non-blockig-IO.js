// Non Blocking IO Demo

// need a file system module in Node to load and process files
//IO
const fs=require('fs');


// ASynchronous call
fs.readFile('./veg-menu.txt','utf8',(error,data)=>{
if(error){
    console.log('Problem loading/reading file '+error);
    return;
}
console.log(data);

}); // blocking IO

console.log('do something else');






