import React, {useState} from 'react';
import classes from "./Components/App.module.css";
import List from "./Components/List/List";
import FormDogs from "./Components/FormDogs/FormDogs";
import FormCats from "./Components/FormCats/FormCats";

function App() {
    const [catNames, setCatNames] = useState( [])
    const [dogNames, setDogNames] = useState( [])

    const createNewCatName = (newCatName)  => {
        setCatNames ([...catNames,newCatName])
    }
    const createNewDogName = (newDogName) => {
        setDogNames ([...dogNames,newDogName])
    }

    const removeCat = (catName) => {
        setCatNames(catNames.filter(c => c.id !== catName.id))
    }
    const removeDog = (dogName) => {
        setDogNames(dogNames.filter(d => d.id !== dogName.id))
    }

    return (
        <div className={classes.App}>
            <div className={classes.forms}>
                <FormCats create={createNewCatName}/>
                <FormDogs create={createNewDogName}/>
            </div>
            <hr/>
            <div className={classes.lists}>
                <div className={classes.list}><List remove={removeCat} name={catNames}/></div>
                <List remove={removeDog} name={dogNames}/>
            </div>
        </div>
    );
}

export default App;