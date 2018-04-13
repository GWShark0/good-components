import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './MovieList.css';

function MovieList(props) {
  const {
    className,
    tag: Tag,
    ...rest,
  } = props;

  const classes = classNames(className, 'movie-list');

  return (
    <Tag {...rest} className={classes} />
  );
}

MovieList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
}

MovieList.defaultProps = {
  tag: 'div',
};

export default MovieList;
