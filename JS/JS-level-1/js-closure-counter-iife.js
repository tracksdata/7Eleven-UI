// IIFE -(Immedialtly Invokable Function Expression) / self executable function

var num=(function sample(){
   // console.log('--- welcome to sample function');
    return 100; 
})();

//var n=sample();
//console.log('N is '+n);
//console.log(num);

var counter=(function(){ // paremt contect

    var count=0;  // private
    function doCount(){
        count++;
    }

    function getCount(){
        return count;
    }

    function inner(){
        console.log('--- inner function');
        
    }

    // public
    return{ // object
        dc:doCount,
        gc:getCount
    };

})();
//counter.count=1000;
counter.dc();
counter.dc();
counter.dc();
counter.dc();
console.log(counter.gc());



/*var count=counter();

count.doCount();
count.doCount();
count.doCount();

count.doCount();
count.doCount();
count.doCount();

console.log(count.getCount());
*/



var emp={
    eid:10,
    ename:'Praveen',
    salary:8484,
    sayName:function(){
        console.log('your name is '+emp.ename);
        
    }
}

var person={
    name:'abc',
    hobbies:['h1','h2','h3'],
    skills:[
        {
        sid:1,
        sn:'java'
      },
      {
        sid:2,
        sn:'angular'
      }
]
}



