import React from 'react';
import PropTypes from 'prop-types';
import Favorite from './Favorite';

import './MovieItem.css';

function MovieItem(props) {
  return (
    <div className="movie-item" onClick={props.onClick}>
      <Favorite active={props.favorite} />
      <img
        className="movie-item__poster"
        src={props.posterPath}
        alt={props.title}
      />
      <div className="movie-item__title">
        {props.title}
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  favorite: PropTypes.bool,
  posterPath: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
}

export default MovieItem;
