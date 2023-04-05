import React, { useState, useEffect } from "react";
import "../css/main.scss";
import SearchResults from "../components/SearchResults.js";
import MovieCard from "../components/MovieCard.js";

const apiKey = "e4a062cd"; //API nøkkel fra OMBD 
const defaultSearchTerm = "james+bond";

function Forside() {
  const [movies, setMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchMovies(searchTerm) {
    const url = `https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    fetchMovies(defaultSearchTerm);
  }, []);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetchMovies(searchTerm);
    } else {
      setMovies(null);
    }
  }, [searchTerm]);

  function handleSearchSubmit(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value;
    if (searchTerm.length >= 3) {
      setSearchTerm(searchTerm);
    }
  }

  return (
    <div>
      <header>
        <h1 style={{ fontSize: "72px" }}>Arbeidskrav 4: Filmsøk</h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Søk her etter filmer..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Søk</button>
        </form>
      </header>
      <main>
        {movies === null ? (
          <ul className="movie-list">
            <DefaultMovieList />
          </ul>
        ) : (
          <SearchResults movies={movies} />
        )}
      </main>
    </div>
  );
}

function DefaultMovieList() {
  const [defaultMovies, setDefaultMovies] = useState([]);

  useEffect(() => {
    async function getDefaultMovies() {
      const url = `https://www.omdbapi.com/?s=${defaultSearchTerm}&type=movie&apikey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setDefaultMovies(data.Search);
    }
    getDefaultMovies();
  }, []);

  return (
    <>
      {defaultMovies.map((movie) => (
        <li key={movie.imdbID}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </>
  );
}

export default Forside;
