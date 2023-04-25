import { Link } from 'react-router-dom';
import '../Card/card.css'

export default function Card({id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className="card-container">
         <div className='card'>
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
