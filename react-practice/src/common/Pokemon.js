import useFetch from "./hooks/useFetch";

const Pokemon = () => {
    const fetchData  = useFetch('https://pokeapi.co/api/v2/pokemon')
    console.log('fetching');
    return (<></>);
}

export default Pokemon;