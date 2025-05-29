import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #ccc', width: 200, margin: 10, padding: 10 }}>
      <Link to={`/filme/${movie.imdbID}`}>
        <img src={movie.Poster} alt={movie.Title} style={{ width: '100%' }} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
