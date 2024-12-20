import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import moviesData from '../data/movies.json';

function AddMoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const existingMovie = id 
    ? moviesData.movies.find(movie => movie.id === parseInt(id)) 
    : null;

  const [title, setTitle] = useState(existingMovie ? existingMovie.title : '');
  const [genre, setGenre] = useState(existingMovie ? existingMovie.genre : '');
  const [description, setDescription] = useState(existingMovie ? existingMovie.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMovie = {
      id: existingMovie ? existingMovie.id : Date.now(),
      title,
      genre,
      description
    };

    console.log('Film disimpan:', newMovie);
    
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl mb-4">
        {existingMovie ? 'Edit Film' : 'Tambah Film Baru'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Judul Film</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Genre</label>
          <select 
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Pilih Genre</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Deskripsi</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {existingMovie ? 'Update Film' : 'Tambah Film'}
        </button>
      </form>
    </div>
  );
}

export default AddMoviePage;