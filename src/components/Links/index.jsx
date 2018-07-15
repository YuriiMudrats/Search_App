import React from "react";
import PropTypes from "prop-types";

import './styles'

const LinksList = ({ link, id }) => (
  <div>
    <a
      target="_blank"
      href={`https://en.wikipedia.org/?curid=${id}`}
      rel="noopener noreferrer"
    >
      <p className="text">{link.toUpperCase()}</p>
    </a>
  </div>
);

LinksList.propTypes = {
  link: PropTypes.string.isRequired,
  id: PropTypes.number
}

export default LinksList;
