import React from 'react';
import PropTypes from 'prop-types';

const A = ({ children, href, className }) => (
  <a
    className={className}
    target="_blank"
    href={href}
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

A.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default A;