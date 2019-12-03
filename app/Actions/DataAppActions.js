export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_POKEMON = 'SET_POKEMON';

export const setMessage = texto => ({
    type: SET_MESSAGE,
    payload: texto
});

export const setPokemon = id => ({
    type: SET_POKEMON,
    payload: id
});