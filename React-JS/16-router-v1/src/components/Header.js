import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {
    constructor(){
        super();
        this.state={
            products:[]
        }
    }

    changeEvent(e) {


        //console.log(e.target.value);
        let key = e.which;
        console.log(key);
        console.log(e.target.value);
        
       // if (key === 13) {
           
            axios.get(`http://localhost:8080/api/products/byName/${e.target.value}`)
                .then(resp => {
                   // resp.data.map(prod => {
                      //  console.log(prod);
                    //})
                    this.setState({products:resp.data})
                    e.preventDefault();
                })
       // }

    }

    render() {
        return (
            <div>
                <div>
                    {this.state.products.map(prod=><li key={prod.id}>{prod.name}</li>)}
                </div>
                <nav className="navbar navbar-light bg-primary mt-3">
                    <a className="navbar-brand" href="/">
                        FlipKart
                    </a>
                    <form className="form-inline">
                        <input onKeyUp={e => this.changeEvent(e)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        );
    }
}

export default Header;