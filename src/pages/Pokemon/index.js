import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getData } from "../../axios";

const Pokemon = ({ pokemon }) => {
    let { state } = useLocation();
    let [pokemonData, setPokemonData] = useState();
    useEffect(() => {
        const getPokemonList = async (url) => {
            const response = await getData(url);

            setPokemonData(response.data);
        };
        console.log(state.url);

        getPokemonList(state.url);
        // setTimeout(()=>{

        //     console.log(pokemonData.data.sprites)
        // }, 10)
        // console.log(state.url.sprites.other.dream_world.front_default)
    }, []);
    const hasData = (data) => {
        if (data) {
            return data;
        }
        return "";
    };

    return (
        <section className="containerPokemonData">
            {/* <div>Pokemon page</div> */}
            {/* img */}
            {/* sprites.other.dream_world.front_default */}
            {hasData(pokemonData) ? (
                <figure>
                    <img
                        src={
                            pokemonData.sprites.other.dream_world
                                .front_default ||
                            require("../../assets/images/noPokemonImage.gif")
                        }
                        // src={require("../../assets/images/noPokemonImage.gif")}
                        alt=""
                        width={150}
                        className={
                            pokemonData.sprites.other.dream_world.front_default
                                ? ""
                                : "pokemonNoImgAvailable"
                        }
                    />
                    {pokemonData.sprites.other.dream_world.front_default ? (
                        ""
                    ) : (
                        <figcaption>NO IMAGE AVAILABLE</figcaption>
                    )}
                    {pokemonData ? console.log(pokemonData) : ""}
                    {pokemonData
                        ? console.log(
                              pokemonData.sprites.other.dream_world
                                  .front_default
                          )
                        : ""}
                </figure>
            ) : (
                ""
            )}
        </section>
    );
};

export default Pokemon;
