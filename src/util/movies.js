import movies from './movies.json';

export function fetchMovies() {
  return Promise.resolve(movies);
}

export function favoriteMovie(movies, id) {
  return movies.map((movie) => {
    if (movie.id === id) {
      return {
        ...movie,
        favorite: !movie.favorite,
      };
    }
    return movie;
  })
}
