import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Cards from '../components/Cards/Cards.js';
import Nav from '../components/Nav/Nav.js';
import About from '../components/About/About.js';
import Detail from '../components/Detail/Detail.js';
import NotFound from '../components/NotFound/Error';
import Form from '../components/Form/Form';
import Favorites from '../components/Favorites/Favorites';


function App() {

   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const navigate = useNavigate();
   const EMAIL = 'juan@juan.com';
   const PASSWORD = 'juan123';

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

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   function logOut() {
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const { pathname } = useLocation();

   return (
      <div >
         {pathname !== '/' ? <Nav onSearch={onSearch} logOut={logOut} /> : null}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
