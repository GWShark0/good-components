import movies from './movies.json';

export default function fetchMovies() {
  return Promise.resolve(movies);
}
