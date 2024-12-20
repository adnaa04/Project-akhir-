import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import moviesData from '../data/movies.json';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('Semua');

  useEffect(() => {
    setMovies(moviesData.movies);
  }, []);

  const genres = ['Semua', 'Action', 'Drama', 'Comedy'];

  const filteredMovies = filter === 'Semua' 
    ? movies 
    : movies.filter(movie => movie.genre === filter);

  const handleDelete = (id) => {
    const updatedMovies = movies.filter(movie => movie.id !== id);
    setMovies(updatedMovies);
    
    console.log('Film dihapus:', id);
  };

  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <label className="mr-2">Filter Genre:</label>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <MovieList 
        movies={filteredMovies} 
        onDelete={handleDelete} 
      />
    </div>
  );
}

export default HomePage;