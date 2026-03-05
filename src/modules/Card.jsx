function Card({ pokemon }) {
  return (
    <>
      {pokemon?.name ? (
        <div className="cardPokemon">
          <h2>{pokemon.name}</h2>
          <img
            src={pokemon.sprites.other["official-artwork"]?.front_default}
            alt={pokemon.name}
          />
        </div>
      ) : (
        <p>Pokemon no encontrado</p>
      )}
    </>
  );
}

export default Card;
