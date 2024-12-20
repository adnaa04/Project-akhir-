import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMoviePage from './pages/AddMoviePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="mb-6">
          <div className="flex space-x-4">
            <Link 
              to="/" 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Daftar Film
            </Link>
            <Link 
              to="/add" 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Tambah Film
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddMoviePage />} />
          <Route path="/edit/:id" element={<AddMoviePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;