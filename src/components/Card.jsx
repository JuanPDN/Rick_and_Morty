import './card.css'

export default function Card({ name, status, species, gender, origin, image }) {
   return (
      <div className="card-container">
         <div className='card'>

            <button onClick={() => { window.alert('Cerrar') }}>X</button>
            <img className='image-card' src={image} alt={name} />
            <p className='character-name'>{name}</p>
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
