import React, { useState } from 'react';
import './MovieList.css';

const initialMovies = [
  { Title: 'Mad Max: Fury Road', Genre: 'Action', ReleaseYear: 2015 },
  { Title: 'Die Hard', Genre: 'Action', ReleaseYear: 1988 },
  { Title: 'The Shawshank Redemption', Genre: 'Drama', ReleaseYear: 1994 },
  { Title: 'Forrest Gump', Genre: 'Drama', ReleaseYear: 1994 },
  { Title: 'Superbad', Genre: 'Comedy', ReleaseYear: 2007 },
  { Title: 'The Grand Budapest Hotel', Genre: 'Comedy', ReleaseYear: 2014 },
  { Title: 'Blade Runner 2049', Genre: 'Sci-Fi', ReleaseYear: 2017 },
  { Title: 'Interstellar', Genre: 'Sci-Fi', ReleaseYear: 2014 },
  { Title: 'The Conjuring', Genre: 'Horror', ReleaseYear: 2013 },
  { Title: 'Get Out', Genre: 'Horror', ReleaseYear: 2017 },
];

function MovieList() {
  const [movies] = useState(initialMovies);
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = [...new Set(movies.map((movie) => movie.Genre))];

  const displayedMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.Genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(title);
  };

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">Movie List</h1>

      <select
        className="genre-select"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="All Genres">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <div className="movie-card-grid">
        {displayedMovies.map((movie) => (
          <div
            key={movie.Title}
            className="movie-card"
            onClick={() => handleMovieClick(movie.Title)}
          >
            <h2 className="movie-title">{movie.Title}</h2>
            <p className="movie-genre">{movie.Genre}</p>
            <p className="movie-year">{movie.ReleaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
