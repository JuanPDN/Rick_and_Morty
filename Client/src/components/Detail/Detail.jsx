import '../Detail/detail.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/Error';


function Detail() {

    const { id } = useParams()
    const [character, setCharacter] = useState({})


    useEffect(() => {
        axios(`/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);


    if (id > 860 || id < 1 ){
        return (
            <NotFound />
        )
    } else {
        return (
            <div className="detail">
                <div className='container'>

                    <div className='header'>
                        <h1>
                            {character.name}
                        </h1>
                        <img src={character.image} alt={character.name} />
                    </div>
                    <ul>
                        <li>Status: {character.status}</li>
                        <li>Gender: {character.gender}</li>
                        <li>Specie: {character.species}</li>
                        <li>Origin: {character.origin?.name}</li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Detail;