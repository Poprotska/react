import {Car} from "../Сar/Car";

const Cars = ({cars, getCarId}) => {
    return (
        <div style={{margin:'50px'}}>
            {cars.map(car => <Car key={car.id} car={car} getCarId={getCarId}/>)}
        </div>
    );
};

export {Cars};