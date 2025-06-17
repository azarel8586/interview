import {useFetch} from "./hooks/useFetch";

const Pokemon = () => {
    const { fetchPage, setLimit } = useFetch('https://pokeapi.co/api/v2/pokemon', 10);
    //console.log('fetching', fetchData());
    const allPokemon = fetchPage();
    console.log('fetching all ', allPokemon);
    return (<></>);
}

export default Pokemon;