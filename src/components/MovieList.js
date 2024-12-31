import React from 'react';

function MovieList({ movies, onDelete }) {
  return (
    <div>
      {movies.length === 0 ? (
        <p>Tidak ada film yang ditemukan.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <li key={movie._id} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-sm">Genre: {movie.genre}</p>
              <p className="text-sm">{movie.description}</p>
              <button
                onClick={() => onDelete(movie._id)}
                className="mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
