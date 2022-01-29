import React from 'react';

const Details = (props) => {
    return (
        <div className="name">
            <div className="nameDetails">
                {props.number} {props.name}
            </div>
            <div className="list_btn">
                <button onClick={() => props.remove(props.name)}>Delete</button>
            </div>
        </div>
    );
}
export default Details;