import React, {useEffect, useState} from "react";
import axios from "axios";
const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [search, setSearch] = useState('') //input - для поиска includes('')
    useEffect(() => {
        axios('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
            .then(({data}) => setPokemon(data.pokemon))
    })
    const filterPokemons = pokemon.filter(el => el.name.toLowerCase().includes(search))
    //фильтрует, 2.каждого в малень-й регистр, 3.includes(search)ищет в переменной, 4.перебирает map и отображает отфильтрован. инфор. по запросу
    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase()) // прежде чем класть в state - превращаем нижний регистр
    }
    return (
<div>
    <input type="text" onChange={handleSearch} className='search' placeholder='Search...'/>  {/*берет onChange{}  и записываетв state то что печатаем*/}
    <div className='row'>
    {
        filterPokemons.map(el => //переменная filteredPokemons
            <div className='col-3' key={el.id}>
                <img src={el.img} alt=""/>
                <div>{el.name}</div>
            </div>
        )
    }
</div>
</div>
    )
};
export default Pokemon