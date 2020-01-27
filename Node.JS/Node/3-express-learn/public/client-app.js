console.log('- client-app-js');

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
