import { URL } from "../../helpers/constants/api";
import { getData } from "../../axios";
import { useEffect, useState } from "react";
import PokemonList from "../../components/PokemonList";
import Pagination from "../../components/Pagination";

const Home = () => {
    // const [allPokemonList, setAllPokemonList] = useState([]);

    // useEffect(() => {
    // const getAllPokemonList = async (url) => {
    // const response = await getData(url);
    // setAllPokemonList(response.data.results);
    // };

    // getAllPokemonList(URL);
    // test2(URL).then((data) => {
    //     console.log(data.results);
    // });
    // test2('https://pokeapi.co/api/v2/pokemon/10/').then((data) => {
    //     console.log(data.sprites.other.dream_world.front_default);
    // });
    // img
    // data.sprites.other.dream_world.front_default
    // }, []);

    // const [currentPage, setCurrentPage] = useState(1);
    // const [pokemonPerPage, setPokemonPerPage] = useState(10);

    // const indexOfLastPokemon = currentPage * pokemonPerPage;
    // const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    // const listOfCurrentPokemon = allPokemonList.slice(
    //     indexOfFirstPokemon,
    //     indexOfLastPokemon
    // );

    // useEffect(() => {
    //     const getPokemonList = async (url) => {
    //         const response = await getData(url);
    //         setAllPokemonList(response.data.results);
    //     };

    //     getPokemonList(URL + `?limit=${pokemonPerPage}&offset=%${currentPage}`);

    //     console.log(
    //         pokemonPerPage,
    //         currentPage,
    //         indexOfFirstPokemon,
    //         indexOfLastPokemon
    //     );

    // }, []);

    const [allDataOfPokemon, setAllDataOfPokemon] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage, setPokemonPerPage] = useState(10);

    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;

    useEffect(() => {
        const getPokemonList = async (url) => {
            const response = await getData(url);

            // console.log(response.data);
            // console.log(response.data.results.length);
            console.log(response.data);
            return setAllDataOfPokemon(response.data);
            // setAllPokemonList(response.data.results);
        };

        getPokemonList(
            URL + `?limit=${pokemonPerPage}&offset=${indexOfFirstPokemon}`
        );
        // console.log(
        //     URL + `?limit=${pokemonPerPage}&offset=${indexOfFirstPokemon}`
        // );
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [currentPage]);

    const [numberOfListNumbersPerPage, setNumberOfListNumbersPerPage] = useState(5);

    // list is for sending data to Pagination
    const list = {
        pokemonPerPage: pokemonPerPage,
        currentPage: currentPage,
        numberOfAllPokemon: allDataOfPokemon.count,
        numberOfListNumbersPerPage: numberOfListNumbersPerPage
    };

    const getList = (elements) => {
        // console.log(elements);
        if (elements) {
            return setCurrentPage(Number(elements));
        }
    };

    return (
        <>
            <header>hi</header>
            <main>
                {/* {console.log(allDataPokemon.results)} */}
                {allDataOfPokemon.results ? (
                    <PokemonList pokemonList={allDataOfPokemon.results} />
                ) : null}
                {list.numberOfAllPokemon ? (
                    <Pagination list={list} onClick={getList} />
                ) : null}
            </main>
        </>
    );
};

export default Home;
