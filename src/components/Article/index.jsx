import React from "react";

import './styles';

export const Article = ({ name, text, link }) => (
  <div className="article">
    <h2 className="article__title">{name}</h2>
    <p className="article__text">{text}</p>
    <a
      className="article__link"
      target="_blank"
      href={`https://en.wikipedia.org/?curid=${link}`}
    >
      <p className="article__link__text">{"more info..."}</p>
    </a>
  </div>
);
