import React from 'react';
import {Link} from 'react-router-dom';

export default function MovieList(props) {
  const {movieList} = props;


return (
  <>
  <div className='navigation-links'>
      <nav>
        <Link exact to='/'> Home </Link>
        <Link to='/saved-list'> Saved List </Link>
        
      </nav>
    </div>  

    <div className="movie-list">
       
      {movieList.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
    </>
  );
  }

  function MovieDetails(props) {
    const { title, director, metascore } = props.movie;
  
    return (
      <div>
   
    
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
      
      </div>
    );
  }