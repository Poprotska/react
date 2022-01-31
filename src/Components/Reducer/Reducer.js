export const actions = {
    ADD_CAT: 'ADD_CAT',
    ADD_DOG: 'ADD_DOG',
    DEL_CAT: 'DEL_CAT',
    DEL_DOG: 'DEL_DOG'
};

export const formReducer = (state,action) => {
    switch (action.type){
        case actions.ADD_CAT:
            return {...state, cats:[...state.cats, action.payload.cat]}

        case actions.ADD_DOG:
            return {...state, dogs:[...state.dogs, action.payload.dog]}

        case actions.DEL_CAT:
            return {...state, cats:state.cats.filter(cat => cat.id!==action.payload.id)}

        case actions.DEL_DOG:
            return {...state, dogs:state.dogs.filter(dog => dog.id!==action.payload.id)}

        default:
            return state
    }
}