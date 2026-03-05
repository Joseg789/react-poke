import "./App.css";
import { useState, useEffect } from "react";
import FormSearch from "./modules/FormSearch";
import Card from "./modules/Card";
function App() {
  //estados
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`,
        );
        if (!response.ok) {
          throw new Error("Pokemon no encontrado");
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error al obtener el pokemon:", error);
        setPokemon({}); // Limpiar el estado del pokemon si hay un error
      }
    };
    if (search) {
      fetchPokemon();
    }

    //?usando   las promesas con then y catch
    // if (search) {
    //   fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
    //     .then((response) => response.json())
    //     .then((data) => setPokemon(data));
    // }
  }, [search]);

  return (
    <>
      <FormSearch search={search} setSearch={setSearch} pokemon={pokemon} />
      <Card pokemon={pokemon} />
    </>
  );
}

export default App;
