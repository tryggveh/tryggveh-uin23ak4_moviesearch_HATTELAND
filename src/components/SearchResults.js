import MovieCard from "./MovieCard";

const SearchResults = ({ movies }) => (
  <ul className="movie-list">
    {movies && movies.length > 0 ? (
      movies.map((movie) => (
        <li key={movie.imdbID}>
          <MovieCard movie={movie} />
        </li>
      ))
    ) : (
      <p>Ingen filmer funnet.</p>
    )}
  </ul>
);

export default SearchResults;
