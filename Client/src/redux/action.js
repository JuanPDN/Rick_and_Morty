import axios from 'axios'
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";



export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('/rickandmorty/fav', character)
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
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`/rickandmorty/fav/${id}`)
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