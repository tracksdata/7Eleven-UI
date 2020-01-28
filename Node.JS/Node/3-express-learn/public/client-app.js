console.log('- client-app-js');

let div=document.querySelector('#prods');
let table=document.createElement('table');
let theader=document.createElement('tr');
let pid=document.createElement("th");
let pname=document.createElement("th");
let price=document.createElement("th");

pid.textContent="Product Id"
pname.textContent="Product Name";
price.textContent="Price";

theader.appendChild(pid);
theader.appendChild(pname);
theader.appendChild(price);

table.appendChild(theader);




fetch('api/products')
.then(res=>res.json())
.then(products=>{
   
    for(let prod of products){
       let tableRow=document.createElement("tr");
       let d1=document.createElement("td");
       let d2=document.createElement("td");
       let d3=document.createElement("td");
        d1.textContent=prod.id;
        d2.textContent=prod.name;
        d3.textContent=prod.price;

        tableRow.appendChild(d1);
        tableRow.appendChild(d2);
        tableRow.appendChild(d3);

        table.appendChild(tableRow);

    }
    
    div.appendChild(table);
  
    
})




let btn = document.querySelector('#products');

btn.addEventListener('click', e => {
    // load products from http://localhost:3000/products  url
    // when client app also running on the server application, then full url not required

    fetch('products')
        .then((response) => {

            if (response.status != 200) {
                throw Error(response.statusText);
            }
            return response.json();
        })

        .then(products => {
            console.log(products);
        })
        .catch(e=>{
            console.log(e); 
        })


})
