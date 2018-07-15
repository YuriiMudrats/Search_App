import React from 'react';

import PropTypes from 'prop-types';

import './styles';

export const Article = ({ name, text, curId }) => (
  <div className="article">
    <h2 className="article__title">{name}</h2>
    <p className="article__text">{text}</p>
    <a
      className="article__link"
      target="_blank"
      href={`https://en.wikipedia.org/?curid=${curId}`}
    >
      <p className="article__link__text">{'more info...'}</p>
    </a>
  </div>
);

Article.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  curId: PropTypes.number
};

export default Article;
