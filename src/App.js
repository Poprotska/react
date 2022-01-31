import {useReducer, useRef} from "react";

import {ButtonCats, ButtonDogs, actions, formReducer} from "./Components";


const App = () => {
    const [state, dispatch] = useReducer(formReducer, {cats: [], dogs: []});
    const catInput = useRef();
    const dogInput = useRef();

    const addCat = (e) => {
        e.preventDefault();
        const name = catInput.current.value;

        if (!name) {
            return
        }

        const cat = {
            id: Date.now(),
            name
        }

        dispatch({type: actions.ADD_CAT, payload: {cat}})
        catInput.current.value = ''
    }

    const addDog = (e) => {
        e.preventDefault();
        const name = dogInput.current.value;

        if (!name) {
            return
        }

        const dog = {
            id: Date.now(),
            name
        }

        dispatch({type: actions.ADD_DOG, payload: {dog}})
        catInput.current.value = ''
    }

    const deleteCat = (id) => {
        dispatch({type: actions.DEL_CAT, payload: {id}})
    }

    const deleteDog = (id) => {
        dispatch({type: actions.DEL_DOG, payload: {id}})
    }

    return (
        <div>
            <form style={{padding: '15px', display: 'flex', justifyContent: 'center'}}>
                <label>Add Cat: <input ref={catInput} type="text" name={'cat'}/></label>
                <button onClick={addCat}>Save</button>
                <label>Add Dog: <input ref={dogInput} type="text" name={'dog'}/></label>
                <button onClick={addDog}>Save</button>
            </form>
            <hr/>
            <div style={{padding: '15px', display: 'flex', justifyContent: 'center', gap: '350px'}}>
                <ButtonCats cats={state.cats} deleteCat={deleteCat}/>
                <ButtonDogs dogs={state.dogs} deleteDog={deleteDog}/>
            </div>
        </div>
    );
};

export default App;