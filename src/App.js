import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([])
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      setCharacters([
         ...characters.filter((character) => character.id !== parseInt(id))
      ])
   }

   return (
      <div >
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />


      </div>
   );
}

export default App;
