import {useEffect, useState} from "react";
import Rocket from "./Rocket";

export default function Rockets() {

    let [rocketsList, setRocketsList] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(rockets => {
                setRocketsList(rockets.filter(rocket => rocket.launch_year !== '2020'));

            });


    }, [])

    return (
        <div>
            {
                rocketsList.map(value => <Rocket key={value.flight_number}
                                                 model={value}
                />)
            }
        </div>
    );
}