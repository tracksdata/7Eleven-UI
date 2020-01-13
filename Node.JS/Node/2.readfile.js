// neeed a module to read file from disk . we use require keyword to inport node package
var fs=require('fs'); // file systems

function io(){
    var vegMenu=fs.readFile('./veg-menu.txt','utf8',(error,myMemu)=>{
        if(error){
            console.log('problem loading file');
            return;
        }
        console.log(myMemu);
        
    });
}
io();

console.log('--- do something else');







