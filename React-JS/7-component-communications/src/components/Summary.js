import React from 'react';

const Summary = (props) => {
    let {totalActions}=props;
    return (
        <div className="alert alert-info">
            Total Actions: <span className="badge badge-danger">{totalActions}</span>
        </div>
    )

}

export default Summary;