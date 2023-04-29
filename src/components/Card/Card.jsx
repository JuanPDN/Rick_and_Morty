import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/action';
import '../Card/card.css'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props
   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   function handleFavorite() {
      isFav ? removeFav(id) : addFav(props)
      setIsFav(!isFav)
   }

   return (
      <div className="card-container">
         <div className='card'>
            {isFav ? (<button className='btn-isfav' onClick={handleFavorite}>❤️</button>) :
               (<button className='btn-isfav' onClick={handleFavorite}>🤍</button>)}
            <button className='btn-red' onClick={() => onClose(id)}>X</button>
            <img className='image-card' src={image} alt={name} />
            <Link to={`/detail/${id}`}>
               <p className='character-name'>{name}</p>
            </Link>
         </div>
         <div className='character-info'>
            <p>Status: {status}</p>
            <p>Specie: {species}</p>
            <p>Gender: {gender}</p>
            <p>Origin: <br />
               {origin}</p>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)