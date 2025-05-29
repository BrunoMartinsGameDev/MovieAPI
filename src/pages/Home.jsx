import { useEffect, useState } from 'react';
import api from '../api';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await api.get('', {
        params: {
          s: 'spider-man',
          page
        }
      });

      if (response.data.Search) {
        setMovies(response.data.Search);
        setTotalResults(parseInt(response.data.totalResults));
      } else {
        setMovies([]);
      }
    };

    fetchMovies();
  }, [page]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Anterior</button>
        <span style={{ margin: '0 10px' }}>Página {page} de {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page >= totalPages}>Próximo</button>
      </div>
    </div>
  );
}

export default Home;
