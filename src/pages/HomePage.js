import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import HeroCover from "../components/heroCover";
import Navbar from "../components/Navbar";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("Semua");

  useEffect(() => {
    // Fetch data dari endpoint
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/films");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const genres = ["Semua", "Action", "Drama", "Comedy", "Sci-Fi"];

  const filteredMovies =
    filter === "Semua"
      ? movies
      : movies.filter((movie) => movie.genre === filter);

  const handleDelete = async (id) => {
    try {
      // Hapus data di backend
      await axios.delete(`http://localhost:3000/api/films/${id}`);
      // Update state setelah penghapusan berhasil
      const updatedMovies = movies.filter((movie) => movie._id !== id);
      setMovies(updatedMovies);
      alert("Data film berhasil dihapus!");
    } catch (error) {
      console.error("Error deleting movie:", error);
      alert("Terjadi kesalahan saat menghapus data.");
    }
  };

  return (
    <div className="flex-1">
      {/* Navbar */}
      <Navbar />

      {/* Hero Cover */}
      <HeroCover />

      {/* Filter and Movie List */}
      <div className="container mx-auto p-3">
        <div className="mb-4">
          <label className="mr-2">Filter Genre:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <MovieList movies={filteredMovies} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default HomePage;
