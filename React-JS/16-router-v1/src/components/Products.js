import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Products extends Component {
    // pure js code
    test = async () => {
        const data = await fetch('http://localhost:8080/api/products');
        const items = await data.json();
        console.log(items)
    }



    constructor() {
        super();
        this.state = {
            products: []
        }

        // {this.test()}
        axios.get('http://localhost:8080/api/products') // Promise API
            .then(resp => {
                this.setState({ products: resp.data });
            })

    }

    renderProducts() {
        let { products } = this.state;


        return products.map((prod, idx) => {

            return (

                <div key={idx} className="col-3 col-mg-3 col-ld-3 mt-3">
                    <div className="card bg-warning">
                        <div className="card-body">
                            <Link to={`/products/${prod.id}`}>{prod.name}</Link>
                        </div>
                    </div>

                </div>
            )
        })
    }

    render() {




        return (
            <div>

                <div className="row">
                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}

export default Products;