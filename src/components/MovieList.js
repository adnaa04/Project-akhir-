import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map(movie => (
        <div 
          key={movie.id} 
          className="bg-white p-4 rounded shadow-md"
        >
          <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
          <p className="text-gray-600 mb-2">Genre: {movie.genre}</p>
          <p className="mb-4">{movie.description}</p>
          <div className="flex space-x-2">
            <Link 
              to={`/edit/${movie.id}`}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </Link>
            <button 
              onClick={() => onDelete(movie.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;