var p=document.getElementById('p1');

document.getElementById('p1').innerHTML='New Data';
//document.getElementById('mydiv').innerHTML='Div data is here';
var content=document.querySelector('.mydiv');
content.style.color='green';


var ph=document.querySelector('.page-header');

ph.style.color='blue';
ph.style.backgroundColor='yellow';


// creating new elements
// crete a new li element  and  append li element to ul

var userList=document.querySelector('#user-list');
console.log(userList);
// crete a new li element
var newLiElement=document.createElement('li');
newLiElement.textContent='Bucky Wall';
// append newLiElement back to ul
userList.appendChild(newLiElement);

var users=['A','B','C','D','E','F','G'];

for(var user of users){ // this loop only for arrays 
   var newLi=document.createElement('li');
   newLi.textContent=user;
   userList.appendChild(newLi);  
}

// Events in JS

var btn1=document.querySelector('#b1');
var btn2=document.querySelector('#b2');

btn1.addEventListener('click',e=>{
    console.log('--- Hello for click - Add');
    
})

btn2.addEventListener('click',e=>{
    var empName=document.querySelector('#ename');
    console.log('--- Hello dearc  '+empName.value);
    
})

var myUsers=document.querySelectorAll('#user-list li');

for(var mu of myUsers){
    mu.addEventListener('click',e=>{
        console.log(e.target);
        
        e.target.style.color='red';
    })
}



//-------------------------------------------------------





