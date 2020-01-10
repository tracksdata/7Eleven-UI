let emps=[];
function loadData(){
fetch('http://dummy.restapiexample.com/api/v1/employees')
.then(response=>response.json())
.then(e=>emps=e)
}

//console.log(emps);

function findEmployee(id){
    console.log(emps.length);
    
 var e=emps.filter(emp=>emp.id===id)
 //console.log(e);
 
}
loadData();
console.log(findEmployee(1));
