import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([])
   function onSearch(id) {
      if ((characters.filter((character) => character.id === parseInt(id))).length === 0) {        
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      } else {
         window.alert('¡Ya existe un personaje con este ID!');
      }
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
