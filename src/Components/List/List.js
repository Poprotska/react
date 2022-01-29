import React from 'react';
import Details from "../Details/Details";

const List = ({name, remove}) => {
    return (
        <div>
            {name.map((details) =>
                <Details remove={remove} name={details.name} key={details.id}/>
            )}
        </div>
    );
};

export default List;