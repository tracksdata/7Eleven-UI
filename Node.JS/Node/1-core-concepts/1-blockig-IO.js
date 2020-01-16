// Blocking IO Demo

// need a file system module in Node to load and process files
//IO
const fs=require('fs');


// Synchronous call

const vegMenu=fs.readFileSync('./veg-menu.txt','utf8'); // blocking IO

console.log(vegMenu);

console.log('do something else');






