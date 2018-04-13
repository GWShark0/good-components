import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieItem from './MovieItem';
import { fetchMovies, favoriteMovie } from '../../util/movies';

class Movies extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetchMovies().then((movies) => {
      this.setState({ movies });
    });
  }

  handleFavorite = id => () => {
    const movies = favoriteMovie(this.state.movies, id);
    this.setState({ movies });
  }

  render() {
    return (
      <MovieList>
        {this.state.movies.map(movie =>
          <MovieItem
            {...movie}
            onClick={this.handleFavorite(movie.id)}
            key={movie.id}
          />
        )}
      </MovieList>
    );
  }
}

export default Movies;
