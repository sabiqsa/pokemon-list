import { AppProps } from "next/app";
import React from "react";
import Layout from "../comps/Layout";
import PokemonProvider from "../context/PokemonContext";

import "tailwindcss/tailwind.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <PokemonProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PokemonProvider>
  );
}

export default App;
