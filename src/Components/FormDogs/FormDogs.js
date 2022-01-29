import React, {useState} from 'react';
import "./FormDogs.css";


const FormDogs = ({create}) => {
    const [dogName, setDogName] = useState('')

    const addDogName = (e) => {
        e.preventDefault()
        const newName = {
            id: Date.now(),
            name: dogName,
        }
        create(newName)
        setDogName('')
    }
    return (
        <div>
            <div>Add Dog:</div>
            <form>
                <input onChange={e => setDogName(e.target.value)}
                       value={dogName}
                       type="text"
                       placeholder="type here"
                />
                <button onClick={addDogName}>Save</button>
            </form>
        </div>
    );
};

export default FormDogs;