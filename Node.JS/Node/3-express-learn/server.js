// express learn

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }));


let products = [
    { id: 'P001', name: 'Pen', price: 87 },
    { id: 'P002', name: 'Book', price: 837 },
    { id: 'P003', name: 'Laptop', price: 187 },
    { id: 'P004', name: 'Mouse', price: 8327 },
    { id: 'P005', name: 'Phone', price: 827 }
];

app.use(express.static(__dirname + '/public')) // loads only from public

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.post('/api/products', (req, res) => {
    console.log(req.body);
    products.push(req.body);

    console.log(products);

    res.redirect('/');
})


app.put('/api/products', (req, res) => {

    let product = req.body;
    products = products.map(prod => {
        if (prod.id === product.id) {
            return Object.assign({}, product)
        } else {
            return prod;
        }
    });
    console.log("------------------------->");
    console.log(products); // updated product has to be here...
    console.log('<------------------------');



    //res.send(req.body);
    console.log('put request');

    console.log(req.body);
    //res.send(product);
    res.method='GET';
    res.redirect('/');

    //res.redirect(301,"/");
})


app.get('/api/products/:id', (req, res) => {
    let id = req.params.id;

    let prod = products.find(product => product.id === id);
    //return product.id === id;
    //return;


    console.log(prod);
    if (prod == undefined)
        res.status(404).send('No data found for ' + id);
    else
        res.send(prod);

})

app.listen(3000, () => {
    console.log('server started on http://localhost:3000');

});
