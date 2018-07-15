import React from 'react';

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

export default A;