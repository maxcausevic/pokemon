import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [allPokemon, setAllPokemon] = useState([])

    useEffect(() => {

    }, [])

    const getPokemon = (e) => {
        //fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        //.then(res=> {
            //return res.json()
        //})
        // .then(res=>{
            //console.log(res)
            //setAllPokemon(res.results)
        //})
        //.catch(err => console.log("error", err))
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000")
            .then(res => {
                setAllPokemon(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <button onClick={getPokemon}>Click here to get all the Pokemon!</button>
            <h2> Here are all the pokemon!</h2>
            {
                allPokemon.map((pokemon, i) => {
                    return <div key={i} className="card">
                <div className="card-body">
                    <h3 className="card-title">{pokemon.name}</h3>
                    <a href={pokemon.url} className="btn btn-primary">Check out the pokemon info!</a>
                </div>

            </div>
                })
            }

        </div>
    );
};

export default Pokemon;