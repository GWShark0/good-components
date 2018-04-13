import React, { Component } from 'react';
import classNames from 'classnames';
import { fetchMovies, favoriteMovie } from '../../util/movies';

import './Movies.css';

class Movies extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetchMovies().then((movies) => {
      this.setState({ movies });
    });
  }

  handleClick = id => () => {
    const movies = favoriteMovie(this.state.movies, id);
    this.setState({ movies });
  }

  renderMovie = (movie) => {
    const favoriteClass = classNames(
      'movie__favorite',
      { 'movie__favorite--favorited': movie.favorite },
    );

    return (
      <div
        className="movie"
        key={movie.id}
        onClick={this.handleClick(movie.id)}
      >
        <div className={favoriteClass} />
        <img
          className="movie__poster"
          src={movie.posterPath}
          alt={movie.title}
        />
        <div className="movie__title">
          {movie.title}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="movies">
        {this.state.movies.map(this.renderMovie)}
      </div>
    );
  }
}

export default Movies;
