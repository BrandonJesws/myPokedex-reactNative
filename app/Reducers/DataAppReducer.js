import { SET_MESSAGE, SET_POKEMON } from "champions/app/Actions/DataAppActions"

const initialState = {
    currentPokemonID: 0,
    message: "Estado inicial",
    id: 1
}

export default function dataAppReducer(state=initialState, action){
    switch(action.type){
        case SET_MESSAGE:
            return{
                ...state,
                message: action.payload
            }
        case SET_POKEMON:
            return{
                ...state,
                id: action.payload
            }
        default:
            return state;
    }
}