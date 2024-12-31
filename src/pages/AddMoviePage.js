import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AddMoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch data jika ID ada (edit mode)
    if (id) {
      axios
        .get(`http://localhost:3000/api/films/${id}`)
        .then((response) => {
          const movie = response.data;
          setTitle(movie.title);
          setGenre(movie.genre);
          setDescription(movie.description);
        })
        .catch((error) => {
          console.error("Error fetching movie:", error);
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newMovie = {
      title,
      genre,
      description,
    };

    try {
      if (id) {
        // Update data film
        await axios.put(`http://localhost:3000/api/films/${id}`, newMovie);
        alert("Data film berhasil diperbarui!");
      } else {
        // Tambah data film
        await axios.post("http://localhost:3000/api/films", newMovie);
        alert("Data film berhasil ditambahkan!");
      }
      navigate("/"); // Kembali ke halaman utama setelah sukses
    } catch (error) {
      console.error("Error saving movie:", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl mb-4">{id ? "Edit Film" : "Tambah Film Baru"}</h2>
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
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
          disabled={loading}
        >
          {loading ? "Menyimpan..." : id ? "Update Film" : "Tambah Film"}
        </button>
        <button
          type="button"
          onClick={handleBackToHome}
          className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
        >
          Kembali ke Halaman Utama
        </button>
      </form>
    </div>
  );
}

export default AddMoviePage;
