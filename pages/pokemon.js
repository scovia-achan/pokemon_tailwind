import React from "react";
import Layout from "../Components/Layout";
import Link from "next/Link";

export default function pokemon({ pokeman }) {
  console.log(pokeman);
  return (
    <Layout title="single Pokeman">
      <h1>{pokeman.name}</h1>
      <img className="mx-auto" src={pokeman.image} alt={pokeman.name} />
      <p>
        <span className="mt-4 font-bold">Weight: {pokeman.weight}</span>
      </p>
      <p>
        <span className="mt-5 font-bold">Height: {pokeman.height}</span>
      </p>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = await data.json();
    const paddedIndex = ("00" + id).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    pokeman.image = image;
    return {
      props: { pokeman },
    };
  } catch (err) {
    console.log(err);
  }
}
