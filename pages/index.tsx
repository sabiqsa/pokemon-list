import React, { useEffect, useContext, useState } from "react";
import Pagination from "react-paginate";
import Head from "next/head";
import { GetStaticProps } from "next";
import { ListPokemon } from "../comps/ListPokemon";
import { PokemonContext } from "../context/PokemonContext";

// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     const response = await fetch(
//       "https://pokeapi.co/api/v2/pokemon?offset=102&limit=102"
//     );
//     const data = await response.json();
//     console.log("data", data);

//     const getPokemonDetails = data.results.map((urls) => urls.url);

//     const allData = await Promise.all(getPokemonDetails);

//     return {
//       props: { getPokemon: data, detailPokemon: allData },
//     };
//   } catch (err) {
//     console.log("cannot get api", err.message);
//   }
// };

export default function Home() {
  const { listPokemon, listDataPokemon }: any = useContext(PokemonContext);

  return (
    <>
      <div className="mt-12">
        <title>
          <title>Pokemon List</title>
          <meta name="keywords" content="pokemon" />
        </title>

        <ListPokemon data={listDataPokemon} />
      </div>
    </>
  );
}
