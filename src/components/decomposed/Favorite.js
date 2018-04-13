import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Favorite.css';

function Favorite(props) {
  const {
    active,
    className,
    tag: Tag,
    ...rest,
  } = props;

  const classes = classNames(
    className,
    'favorite',
    { 'favorite--active': active },
  );

  return (
    <Tag {...rest} className={classes} />
  );
}

Favorite.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
}

Favorite.defaultProps = {
  tag: 'div',
};

export default Favorite;
