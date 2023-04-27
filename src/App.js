import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import NotFound from './components/NotFound/Error';
import Form from './components/Form/Form';


function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAcces] = useState({
      
   })

   function onSearch(id) {
      if (id > 860) {
         window.alert('¡No hay personajes con este ID!')
      }
      if ((characters.filter((character) => character.id === parseInt(id))).length === 0) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }

      else {
         window.alert('¡Ya existe un personaje con este ID!');
      }
   }

   function onClose(id) {
      setCharacters([
         ...characters.filter((character) => character.id !== parseInt(id))
      ])
   }

   const { pathname } = useLocation();



   return (
      <div >
         {pathname !== '/' ? <Nav onSearch={onSearch} /> : null}
         <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
