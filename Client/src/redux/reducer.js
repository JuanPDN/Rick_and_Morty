import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state, myFavorites: payload, allCharacters: payload
            };
        case REMOVE_FAV:
            return {
                ...state, myFavorites: payload
            };

        case FILTER:
            if (payload === "All") {
                return {
                    ...state,
                    myFavorites: state.allCharacters
                }
            } else {
                return {
                    ...state,
                    myFavorites: [...state.allCharacters.filter((fav) => fav.gender === payload)],
                }
            }

        case ORDER:
            return {
                ...state,
                myFavorites: state.allCharacters.sort((a, b) => {
                    if (a.id > b.id) {
                        return 'A' === payload ? 1 : -1
                    }
                    if (a.id < b.id) {
                        return 'D' === payload ? 1 : -1
                    }
                    return 0
                })
            }


        default:
            return { ...state }
    }
}