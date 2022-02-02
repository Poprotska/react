const Car = ({car: {id, model, price, year}, getCarId}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3px'}}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>getCarId(id)}>Delete</button>
        </div>
    );
};

export {Car};