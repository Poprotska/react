const ButtonCats = ({cats, deleteCat}) => {
    return (
        <div>
            {cats.map(({id, name}) => <div key={id}>{name}<button onClick={()=>deleteCat(id)}>Delete</button></div>)}
        </div>
    );
};

export {ButtonCats};