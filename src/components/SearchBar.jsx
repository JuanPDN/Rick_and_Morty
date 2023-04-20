import './searchBar.css'

export default function SearchBar({onSearch}) {
   return (
      <div className='nav-bar'>
         <nav>
            <input type="text" />
            <button onClick={onSearch} type="input">Agregar</button>
         </nav>
      </div>
   );
}
