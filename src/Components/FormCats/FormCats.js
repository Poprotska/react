import React, {useState} from 'react';
import classes from "./FormCats.css";


const FormCats = ({create}) => {
    const [catName, setCatName] = useState('')

    const addCatName = (e) => {
        e.preventDefault()
        const newName = {
            id: Date.now(),
            name: catName,
        }
        create(newName)
        setCatName('')
    }
    return (
        <div className={classes.form}>
            <div>Add Cat:</div>
            <div>
                <form className={classes.input}>
                    <input onChange={e => setCatName(e.target.value)}
                           value={catName}
                           type="text"
                           placeholder="type here"
                    />
                    <button onClick={addCatName}>Save</button>
                </form>
            </div>
        </div>
    );
};

export default FormCats;