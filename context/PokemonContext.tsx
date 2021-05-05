import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

export interface IState {
  listPokemon: Array<[]>;
  listDataPokemon: Array<[]>;
}

type ContextType = {
  listPokemon: IState[];
  listDataPokemon: IState[];
};

export const PokemonContext = createContext<ContextType>(null);

const PokemonProvider = ({ children }) => {
  const [listPokemon, setListPokemon] = useState<IState[]>([]);
  const [listDataPokemon, setListDataPokemon] = useState<IState[]>([]);
  const [getApi, setGetApi] = useState(false);

  useEffect(() => {
    const getDetail = async () => {
      return await getListDetailPokemon();
    };
    getDetail();
  }, [getApi]);

  const getPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=102&offset=200.`
      );
      const data = await response.json();
      setListPokemon(data.results);

      return data.results;
    } catch (err) {
      console.log("cannot get api", err.message);
    }
  };

  const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      listDataPokemon.push(data);
      setGetApi(true);
    } catch (err) {
      console.log("cannot get api", err.message);
    }
  };

  const getListDetailPokemon = async () => {
    try {
      //get pokemon list
      const pokemons = await getPokemon();

      //   get promises to obtain data for all pokemon in the list
      const pokemonPromises = pokemons.map((p) => getPokemonData(p.url));
      //return all the pokemon data
      return await Promise.all(pokemonPromises);
    } catch (err) {
      console.log("cannot get api", err.message);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        listPokemon,
        listDataPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
