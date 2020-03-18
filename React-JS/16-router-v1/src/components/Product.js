import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {

    constructor(props) {
        super()
        this.state = {
            product: {}
        }
        axios.get(`http://localhost:8080/api/products/${props.match.params.id}`)
            .then(resp => {
                this.setState({ product: resp.data });
            })

    }

    renderProduct() {
        let { product } = this.state;
        return (

            <table className="table">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div>

                {this.renderProduct()}


            </div>
        );
    }
}

export default Product;