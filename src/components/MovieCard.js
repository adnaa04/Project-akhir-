import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css'; // Assuming you have a CSS file for styling

const MovieCard = ({ title, description, posterUrl, releaseDate }) => {
    return (
        <div className="movie-card">
            <img src={posterUrl} alt={`${title} poster`} className="movie-poster" />
            <div className="movie-details">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-description">{description}</p>
                <p className="movie-release-date">Release Date: {releaseDate}</p>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
};

export default MovieCard;
