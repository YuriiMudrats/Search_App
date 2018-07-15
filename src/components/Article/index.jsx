import React from 'react';
import A from '../A'

import PropTypes from 'prop-types';

import './styles.scss';

export const Article = ({ name, text, curId }) => (
  <div className="article">
    <h2 className="article__title">{name}</h2>
    <p className="article__text">{text}</p>
    <A
      className="article__link"
      href={`https://en.wikipedia.org/?curid=${curId}`}
    >
      <p className="article__link__text">{'more info...'}</p>
    </A>
  </div>
);

Article.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  curId: PropTypes.number
};

export default Article;
