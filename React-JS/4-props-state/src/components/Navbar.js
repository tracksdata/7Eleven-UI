import React from 'react';


 const Navbar=(props)=> {

    let { title } = props;
    // let id=props.person.id;
    //let name=props.person.name;
    //let age=props.person.age;

    // way -1 plain json object
    /*
     let {
         person:{
             id,name,age,
             address:{
                 street,city,
                 contacts:{
                     mobile,office,landline
                 }
             }
         }
     }=props;
 
 */
    return (
        <nav className="navbar navbar-light bg-primary">
            <a className="navbar-brand" href="#">{title}</a>
        </nav>
    );
}

export default Navbar;