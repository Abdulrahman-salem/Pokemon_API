import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../axios";

const PokemonList = ({ pokemonList }) => {
    // console.log(pokemonList);

    const goToThisPokemon = (e,url) => {
        e.preventDefault();
        console.log(url);
        // e.target.link()
    };

    let i = 0
    return (
        <section className="PokemonList">
            <ul>
                {
                pokemonList.map((pokemon) => {
                    
                    return (
                        // <Link to={pokemon.url}>
                        <li key={pokemon.name} onClick={(e)=>goToThisPokemon( e, pokemon.url)}>
                            {/* <img src={} alt="" width={50}/> */}
                            {/* {console.log(pokemon)} */}
                            {/* {console.log(pokemon.url)} */}

                            <p>
                                {pokemon.name}
                                </p>
                            {/* <p>{i}</p> */}
                            {/* {i=i+1} */}
                        </li>
                        // </Link>
                    );
                })
                }
            </ul>
            {/* <ul >
                {pokemonList.map((pokemon) => {
                    return <li><p>{pokemon.url}</p></li>;
                })}
            </ul> */}
        </section>
    );
};

export default PokemonList;
