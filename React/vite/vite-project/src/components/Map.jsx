import React from 'react';
import Movies from "./movies.js";
import './map.css'; // Import the CSS file

function Map() {
    return (
        <div className="movies-container">
            {
                Movies.map(movie => (
                    <div className="movie-item" key={movie.id}>
                        <img src={movie.image} alt="movie"/>
                        <h3>{movie.id}</h3>
                        <h3>{movie.title}</h3>
                        <p>Age: {movie.cost}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default Map;