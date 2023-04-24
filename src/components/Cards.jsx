import Card from './Card';
import './cards.css'

export default function Cards(props) {
   const characters = props.characters
   return <div className='container-cards'>
      {characters.map((character) =>
         <Card
            id ={character.id}
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose = {props.onClose}
         />
      )}
   </div>;
}
