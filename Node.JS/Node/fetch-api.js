// ajax  // old api
// fetch api // latest
fetch('http://localhost:8080/api/employees')  // load  data from a server url
// data comes from different servers like Java , dot net , php , node, iis
// node.js can write Rest API urls  and can talk to any databases
.then(response=>response.json())
.then(employees=>{
  console.log(employees);
  
})
   
// Q : Who created this server url and were this url is present?

