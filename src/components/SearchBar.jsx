import { useState } from 'react';
import './searchBar.css'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState([])

   function handleChange(event) {
      setId([
         event.target.value
      ])
   }
   function random() {
      return Math.floor((Math.random() * (860 - 1 + 1)) + 1)
  }
   return (
      <div className='nav-bar'>
         <nav>
            <button className='btn-random' onClick={()=> onSearch(random())}>Random</button>
            <input type="text" onChange={handleChange} value={id} />
            <button className='btn-agregar' onClick={() => onSearch(id)} type="input">Agregar</button>
         </nav>
      </div>
   );
}
