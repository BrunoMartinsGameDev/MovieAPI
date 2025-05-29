import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await api.get('', {
        params: { i: id }
      });
      setMovie(response.data);
    };

    fetchDetails();
  }, [id]);

  if (!movie) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '300px' }} />
      <p><strong>Gênero:</strong> {movie.Genre}</p>
      <p><strong>Diretor:</strong> {movie.Director}</p>
      <p><strong>Sinopse:</strong> {movie.Plot}</p>
    </div>
  );
}

export default MovieDetail;
