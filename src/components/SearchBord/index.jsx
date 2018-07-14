import React from "react";
import { Article } from "./Article";
import { connect } from "react-redux";

const articleMapper = ({ id, extract
  , title }) => (
  <Article key={id} name={title} text={extract
  } link={id} />
);

const SearchBord = ({ articleBord }) => (
  <div>{articleBord ? articleBord.map(articleMapper) : null}</div>
);

function mapStateToProps(state) {
  return {
    articleBord: state.links
  };
}

export default connect(mapStateToProps)(SearchBord);
