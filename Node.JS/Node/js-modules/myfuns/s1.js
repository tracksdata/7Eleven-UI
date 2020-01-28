

exports.sayHello=function(){
    console.log('--- s1.js sayHello function');
    return 'returened message from s1';
}

 exports.p1=function(){console.log('p1 function')}
 exports.p2=function(){console.log('p2 function')}
 exports.p3=function(){console.log('p3 function')}

 exports.ft=function(){
     return function(){
         console.log('--- Testing.....');
         
     }
 }

