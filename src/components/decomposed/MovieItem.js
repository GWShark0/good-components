import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Favorite from './Favorite';

import './MovieItem.css';

function MovieItem(props) {
  const {
    className,
    tag: Tag,
    ...rest,
  } = props;

  const classes = classNames(className, 'movie-item');

  return (
    <div {...rest} className={classes}>
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
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
}

MovieItem.defaultProps = {
  tag: 'div',
}

export default MovieItem;
