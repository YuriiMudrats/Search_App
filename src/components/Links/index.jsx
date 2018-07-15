import React from "react";
import PropTypes from "prop-types";

const LinksList = ({ link, id }) => (
  <div>
    <a
      className="current__refs"
      target="_blank"
      href={`https://en.wikipedia.org/?curid=${id}`}
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
