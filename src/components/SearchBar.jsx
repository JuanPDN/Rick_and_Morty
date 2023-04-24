import { useState } from 'react';
import './searchBar.css'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState([])

   function handleChange (event) {
      setId([
         event.target.value
      ])
   } 

   return (
      <div className='nav-bar'>
         <nav>
            <input type="text" onChange={handleChange} value={id} />
            <button onClick={()=>onSearch(id)} type="input">Agregar</button>
         </nav>
      </div>
   );
}
