import React from "react";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(search);
};

function FormSearch({ search, setSearch, pokemon }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          name="search"
          placeholder="escribe el pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
}

export default FormSearch;
