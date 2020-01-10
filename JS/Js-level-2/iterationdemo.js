// real time application

let orders=[
    {id:1,amt:200},
    {id:1,amt:100},
    {id:2,amt:1000},
    {id:1,amt:250},
    {id:1,amt:300},
    {id:2,amt:2000}
]

// Q-> display sum of all o places with order id  1 - >      850 

 // 1. filter order number 1 
 // 2. copy only order amount of filtered objects
 // 3. add amount of all copied orders



 let textField=document.querySelector('#user');
 let userList=document.querySelector('#user-list');


 textField.addEventListener('keyup',e=>{
     
    if(e.which===13){
        var newLiElement=document.createElement('li');
        newLiElement.textContent=textField.value;
        userList.appendChild(newLiElement);
    }
     
 })


 function orderSummary(id){
 var sum=orders.filter(order=>order.id===id)
.map(order=>order.amt)
.reduce((a,b)=>a+b);
  document.getElementById('orderTotal').innerHTML=sum;

}

let btn=document.querySelector('#orderBtn');


// executed /emits when enter key is pressed.

var textFiledId=document.querySelector('#orderId');

textFiledId.addEventListener('keyup',e=>{
    if(e.which===13){
        let id=e.target.value;
        this.orderSummary(Number.parseInt(id));   
    } 
})


btn.addEventListener('click',e=>{
    var id=document.getElementById('orderId').value;
    this.orderSummary(Number.parseInt(id));
})


 
