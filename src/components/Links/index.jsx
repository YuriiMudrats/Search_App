import React from "react";

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

export default LinksList;
