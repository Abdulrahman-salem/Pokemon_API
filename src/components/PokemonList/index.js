import { Link, Outlet } from "react-router-dom";
// import Pokemon from "../../pages/Pokemon";
// import { getData } from "../../axios";
// import Pokemon from "../../pages/Pokemon";

const PokemonList = ({ pokemonList }) => {
    // console.log(pokemonList);

    const goToThisPokemon = (e, url, pokemonName) => {
        e.preventDefault();
        console.log(url);
        console.log(`/pokemon/${pokemonName}`);
    };

    return (
        <section className="PokemonList">
            <ul>
                {pokemonList.map((pokemon) => {
                    return (
                        <li
                            key={pokemon.name}
                            onClick={(e) =>
                                goToThisPokemon(e, pokemon.url, pokemon.name)
                            }
                            >
                            {/* {console.log(pokemon)} */}
                            <Link to={`pokemon/${pokemon.name}`} state={pokemon} className="pokemonLink" >
                            {/* <Link to={<Pokemon pokemon={pokemon}/>} state={pokemon} > */}
                                {/* <img src={} alt="" width={50}/> */}
                                {/* {console.log(pokemon.url)} */}

                                <p>{pokemon.name}</p>
                                {/* <p>{i}</p> */}
                                {/* {i=i+1} */}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            {/* <ul >
                {pokemonList.map((pokemon) => {
                    return <li><p>{pokemon.url}</p></li>;
                })}
            </ul> */}
            <Outlet />
        </section>
    );
};

export default PokemonList;
