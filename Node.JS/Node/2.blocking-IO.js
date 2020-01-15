// neeed a module to read file from disk . we use require keyword to inport node package
var fs=require('fs'); // file systems

function test(){
    console.log('Hello...');
    
}

function io(){
    var vegMenu=fs.readFileSync('./veg-menu.txt','utf8',(error,myMemu)=>{
        if(error){
            console.log('problem loading file');
            return;
        }
        console.log(myMemu);
        
    });
}
io();
setTimeout(test,3000);
console.log('--- do something else');







