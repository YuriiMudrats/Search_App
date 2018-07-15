import React from "react";
import PropTypes from "prop-types";

import A from '../A'
import './styles.scss'

const LinksList = ({ link, id }) => (
  <div>
    <A
      href={`https://en.wikipedia.org/?curid=${id}`}
    >
      <p className="text">{link.toUpperCase()}</p>
    </A>
  </div>
);

LinksList.propTypes = {
  link: PropTypes.string.isRequired,
  id: PropTypes.number
}

export default LinksList;
