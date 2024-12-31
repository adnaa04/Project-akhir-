import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMoviePage from './pages/AddMoviePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar */}
        <nav>
          <div className="flex gap-6 p-2 rounded-b-3xl shadow-2xl bg-black/10">
            {/* Navbar content removed */}
          </div>
        </nav>

        {/* Routes */}
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
