import React, {useEffect, useState} from "react";
import axios from "axios";

const PokemonGame = () =>{
    const [pokemon, setPokemon] = useState([])
    const [goal, setGoal] = useState({})

    useEffect(() => {
        axios('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
            .then(({data}) => setPokemon(data.pokemon))
    })
    const start = () =>{
     Math.round(Math.random()* 150)
        setGoal(goal.find(el => el.id === Math.random()*150 ))
    }
    return (
        <div>
            <div>SCORE: {start}</div>
            <button onClick={start}></button>

        </div>
    )
}










export default PokemonGame