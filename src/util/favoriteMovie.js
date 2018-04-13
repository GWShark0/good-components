export default function favoriteMovie(movies, id) {
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
