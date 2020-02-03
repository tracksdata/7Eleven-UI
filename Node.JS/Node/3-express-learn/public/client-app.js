console.log('- client-app-js');



let addBtn = document.querySelector('#product_add');
let btn = document.querySelector('#products');
let putDemo = document.querySelector('#put-demo');
let findBtn = document.querySelector('#find-btn');
findBtn.addEventListener('click', e => {

    let id = document.querySelector('#productId').value;

    fetch(`/api/products/${id}`)
        .then(response => {
            const contentType = response.headers.get("content-type");
            if (contentType.indexOf('application/json') !== -1) { // Handle JSON Response
                return response.json().then(product => {
                    console.log(product);
                    generateFormForUpdate(product);

                })
            } 
            else { // Handle Text Response
                return response.text().then(errorMessage => {

                    console.log(errorMessage);

                })
            } // else end

        })
    })

/*
putDemo.addEventListener('click', e => {
    fetch('/api/products', {
        
        method: 'PUT'
    })

    console.log('test put');
    
})

*/
//generate form for add new product
addBtn.addEventListener('click', e => {
    generateForm();
})
// display products
btn.addEventListener('click', e => {
    displayProducts();
})

// form generation for update
function generateFormForUpdate(product) {
    let updateForm = document.querySelector('#form-update-div');
    let element = document.querySelector("#prods");
    let felement = document.querySelector("#form-div");

    felement.style.display = 'none';           // Hide
    element.style.display = 'none';           // Hide
    updateForm.style.display = 'block';      // Show


    let formDiv = document.querySelector('#form-update-div');
    let idDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    let priceDiv = document.createElement('div');
    let btnDiv = document.createElement('div');

    idDiv.classList.add('form-group');
    nameDiv.classList.add('form-group');
    priceDiv.classList.add('form-group');

    const productForm = document.createElement("form");
    const lableTextId = document.createElement('lable');
    const lableTextName = document.createElement('lable');
    const lableTextprice = document.createElement('lable');
    const inputFiledId = document.createElement('input');
    const inputFiledName = document.createElement('input');
    const inputFiledPrice = document.createElement('input');
    const submitBtn = document.createElement('button');


    formDiv.classList.add('col-6','col-md-6')
    submitBtn.setAttribute("type", "button");
    submitBtn.textContent = "Update";
    submitBtn.classList.add('btn','btn-primary')
    inputFiledId.classList.add('form-control')
    inputFiledName.classList.add('form-control')
    inputFiledPrice.classList.add('form-control')

    lableTextId.textContent = 'Product Id';
    lableTextName.textContent = 'Product Name';
    lableTextprice.textContent = 'Price';

    inputFiledId.setAttribute("type", "text");
    inputFiledId.setAttribute("name", "id");
    inputFiledId.setAttribute('value', product.id);
    inputFiledId.setAttribute('readonly', true);

    inputFiledName.setAttribute("type", "text");
    inputFiledName.setAttribute("name", "name");
    inputFiledName.setAttribute('value', product.name);

    inputFiledPrice.setAttribute("type", "text");
    inputFiledPrice.setAttribute("name", "price");
    inputFiledPrice.setAttribute('value', product.price);

    idDiv.appendChild(lableTextId);
    idDiv.appendChild(inputFiledId);

    nameDiv.appendChild(lableTextName);
    nameDiv.appendChild(inputFiledName);


    priceDiv.appendChild(lableTextprice);
    priceDiv.appendChild(inputFiledPrice);

    btnDiv.appendChild(submitBtn);
    btnDiv.classList.add('text-center') // button moves to center of form
    productForm.appendChild(idDiv);
    productForm.appendChild(nameDiv);
    productForm.appendChild(priceDiv);
    productForm.appendChild(btnDiv);
    submitBtn.setAttribute('id', 'submit-updated-data');

    formDiv.innerHTML = "";
    formDiv.appendChild(productForm);

    let d = document.querySelector('#test-1');
    console.log(d);
    d.addEventListener('click', e => {
        product.name = inputFiledName.value;
        product.price = inputFiledPrice.value;
        // console.log('ID:---> '+product.name);

        fetch('/api/products', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })

        console.log('test put');

    })


}

// form generation
function generateForm() {
    let formUpdate = document.querySelector("#form-update-div");
    let element = document.querySelector("#prods");
    let felement = document.querySelector("#form-div");

    felement.style.display = 'block';           // Show
    element.style.display = 'none';           // Hide
    formUpdate.style.display = 'none';           // Hide



    let formDiv = document.querySelector('#form-div');
    let idDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    let priceDiv = document.createElement('div');
    let btnDiv = document.createElement('div');

    nameDiv.classList.add('form-group');
    priceDiv.classList.add('form-group');

    const productForm = document.createElement("form");
    const lableTextId = document.createElement('lable');
    const lableTextName = document.createElement('lable');
    const lableTextprice = document.createElement('lable');
    const inputFiledId = document.createElement('input');
    const inputFiledName = document.createElement('input');
    const inputFiledPrice = document.createElement('input');
    const submitBtn = document.createElement('button');
    formDiv.classList.add('col-6')
    formDiv.classList.add('col-md-6');
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Save Product";
    submitBtn.classList.add('btn')
    submitBtn.classList.add('btn-primary')
    //submitBtn.classList.add('text-center')
    inputFiledId.classList.add('form-control')
    inputFiledName.classList.add('form-control')
    inputFiledPrice.classList.add('form-control')

    productForm.setAttribute('action', '/api/products');
    productForm.setAttribute('method', 'POST');


    lableTextId.textContent = 'Product Id';
    lableTextName.textContent = 'Product Name';
    lableTextprice.textContent = 'Price';

    inputFiledId.setAttribute("type", "text");
    inputFiledId.setAttribute("name", "id");

    inputFiledName.setAttribute("type", "text");
    inputFiledName.setAttribute("name", "name");

    inputFiledPrice.setAttribute("type", "text");
    inputFiledPrice.setAttribute("name", "price");

    idDiv.classList.add('form-group');
    idDiv.appendChild(lableTextId);
    idDiv.appendChild(inputFiledId);

    nameDiv.appendChild(lableTextName);
    nameDiv.appendChild(inputFiledName);


    priceDiv.appendChild(lableTextprice);
    priceDiv.appendChild(inputFiledPrice);

    btnDiv.appendChild(submitBtn);
    btnDiv.classList.add('text-center')
    productForm.appendChild(idDiv);
    productForm.appendChild(nameDiv);
    productForm.appendChild(priceDiv);


    productForm.appendChild(btnDiv);

    formDiv.innerHTML = "";
    formDiv.appendChild(productForm);

}

// display products
function displayProducts() {
    let pelement = document.querySelector("#prods");

    let felement = document.querySelector("#form-div");
    let updateForm = document.querySelector("#form-update-div");


    pelement.style.display = 'block';           // SHOW
    felement.style.display = 'none';           // Hide
    updateForm.style.display = 'none';           // Hide


    let div = document.querySelector('#prods');
    let table = document.createElement('table');
    let theader = document.createElement('tr');
    let pid = document.createElement("th");
    let pname = document.createElement("th");
    let price = document.createElement("th");
    let tbody = document.createElement("tbody");

    div.classList.add('col-6', 'col-md-6')
    pid.textContent = "Product Id"
    pname.textContent = "Product Name";
    price.textContent = "Price";

    theader.appendChild(pid);
    theader.appendChild(pname);
    theader.appendChild(price);

    table.appendChild(theader);


    table.classList.add("table")
    table.classList.add("table-hover")
    //table.appendChild(tbody);
    fetch('api/products')
        .then(res => res.json())
        .then(products => {

            for (let prod of products) {


                let tableRow = document.createElement("tr");
                let d1 = document.createElement("td");
                let d2 = document.createElement("td");
                let d3 = document.createElement("td");
                d1.textContent = prod.id;
                d2.textContent = prod.name;
                d3.textContent = prod.price;

                tableRow.appendChild(d1);
                tableRow.appendChild(d2);
                tableRow.appendChild(d3);
                tbody.appendChild(tableRow);
                table.appendChild(tbody);

            }

            div.innerHTML = " ";
            div.appendChild(table)
        })
}

