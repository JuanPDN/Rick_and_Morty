import { connect, useSelector } from "react-redux";
import Card from "../Card/Card";
import { removeFav } from "../../redux/action";

function Favorites({ removeFav }) {

    const myFavorites = useSelector((state)=> state.myFavorites)


    return (
        <div className="container-cards">
            {myFavorites.map((character) =>
                <Card
                    id={character.id}
                    key={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin.name}
                    image={character.image}
                    onClose={removeFav}
                />
            )}
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites
//     }
// }


const mapDispatchToProps = (dispatch) => {
    return{
        removeFav: (id) => dispatch (removeFav(id))
    }
}

export default connect(null, mapDispatchToProps)(Favorites);