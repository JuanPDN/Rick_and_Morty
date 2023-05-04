import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { removeFav, filterCards, orderCards } from "../../redux/action";
import { useState } from "react";
import './favorites.css'

export default function Favorites() {

    const [aux, setAux] = useState(false)
    const myFavorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch()


    const remove = (id) => {
        dispatch(removeFav(id))
    }

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div className="filters">
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div >
            <div className="container-cards">
                {myFavorites.map((character) =>
                    <Card
                        id={character.id}
                        key={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin}
                        image={character.image}
                        onClose={remove}
                    />
                )}
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites
//     }
// }


// const mapDispatchToProps = (dispatch) => {
//     return{
//         removeFav: (id) => dispatch (removeFav(id))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites);