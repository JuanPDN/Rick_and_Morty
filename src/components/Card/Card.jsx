import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/action';
import '../Card/card.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props
   const [isFav, setIsFav] = useState(false)

   const myFavorites = useSelector((state)=> state.myFavorites)
   const dispatch = useDispatch()

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);

   function handleFavorite() {
      isFav ? dispatch(removeFav(id)) : dispatch(addFav(props))
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

// const mapStateToProps = (state) => {
//    return {
//       myFavorites: state.myFavorites
//    }
// }

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFav: (character) => dispatch(addFav(character)),
//       removeFav: (id) => dispatch(removeFav(id))
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card)