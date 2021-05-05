import * as React from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import PokemonDetails from "../../comps/PokemonDetails";

export const getStaticPaths: GetStaticPaths<{ name: any }> = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=102&limit=102"
  );
  const data = await response.json();

  const paths = data.results.map((datas) => {
    return {
      params: { name: datas.name },
    };
  });
  return {
    paths, //indicates that no page needs be created at build time
    fallback: false, //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  );
  const data = await response.json();

  return {
    props: { pokemonDetail: data },
  };
};

interface AppProps {
  pokemonDetail: any;
}

export default function App({ pokemonDetail }: AppProps) {
  const router = useRouter();
  const { name } = router.query;
  console.log("mypokemonDetail", pokemonDetail);
  return (
    <div className="w-full mt-16">
      <PokemonDetails data={pokemonDetail} />
    </div>
  );
}
