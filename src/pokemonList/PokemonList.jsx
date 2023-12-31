import {useEffect, useState} from "react";
import axios from "axios";
import classes from "./pokemonList.module.css";

export const PokemonList = () =>{
    const [pokemons,setPokemons] = useState([])

    useEffect(()=>{
        getPokemons()
    },[])
    const getPokemons= ()=>{
        let endpoints = []
        for(let i = 1;i<=20;i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res)=> setPokemons(res))
    }
    return (
        <>
            <h1 className={classes.title}>Pokemon</h1>
            <div className={classes.wrapper}>
            {pokemons.map(pokemon => (
                <ul key={pokemon.data.id} className={classes.list}>
                    <li className={classes.item}>
                        <h3>{pokemon.data.name}</h3>
                        <img src={pokemon.data.sprites.front_default} alt="pokemon"/>
                    </li>
                </ul>
            ))}
        </div>
        </>

    )
}