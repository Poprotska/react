import React from 'react';
import Cats from "../Details/Details";

const List = ({name, remove}) => {
    return (
        <div>
            {name.map((details) =>
                <Cats remove={remove} name={details.name} key={details.id}/>
            )}
        </div>
    );
};

export default List;