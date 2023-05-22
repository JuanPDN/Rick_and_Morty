import axios from 'axios'
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";



export const addFav = (character) => {
    const endpoint = 'https://rickandmorty-production-51e4.up.railway.app/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character)
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            throw new Error(error)
        }

    };
}

export const removeFav = (id) => {
    const endpoint = 'https://rickandmorty-production-51e4.up.railway.app/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint)
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });

        } catch (error) {
            throw new Error(error)
        }
    };
};

export const filterCards = (gender) => {
    return ({
        type: FILTER,
        payload: gender
    })
}

export const orderCards = (order) => {
    return ({
        type: ORDER,
        payload: order
    })
}