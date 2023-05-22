import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import NotFound from './components/NotFound/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App() {

   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const navigate = useNavigate();

   async function onSearch(id) {
      if (id > 860) {
         window.alert('¡No hay personajes con este ID!')
      }
      if ((characters.filter((character) => character.id === parseInt(id))).length === 0) {
         try {
            const { data } = await axios(`/rickandmorty/character/${id}`)
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         } catch (error) {
            window.alert('Error al buscar el personaje');
         }
      } else {
         window.alert('¡Ya existe un personaje con este ID!');
      }
   }

   function onClose(id) {
      setCharacters([
         ...characters.filter((character) => character.id !== parseInt(id))
      ])
   }

   async  function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';

         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');

      } catch (error) {
         throw new Error(error)
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
