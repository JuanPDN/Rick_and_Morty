import './App.css';
//import Card from './components/Card';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {
   function onSearch (characterID) {
      window.alert(characterID)
   }
   return (
      <div >
         <SearchBar onSearch={onSearch} />
         {/* <Card 
         name = {Rick.name}
         status = {Rick.status}
         species = {Rick.species}
         gender = {Rick.gender}
         origin = {Rick.origin}
         image = {Rick.image}
         onClose={()=>{
            window.alert('Cerrar')
         }}
         /> */}
         <Cards characters = {characters}/>

         
      </div>
   );
}

export default App;
