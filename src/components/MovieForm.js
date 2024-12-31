import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && genre && rating) {
            addMovie({ title, genre, rating });
            setTitle('');
            setGenre('');
            setRating('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Genre:</label>
                <input 
                    type="text" 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Rating:</label>
                <input 
                    type="number" 
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)} 
                    required 
                    min="1" 
                    max="10" 
                />
            </div>
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default MovieForm;