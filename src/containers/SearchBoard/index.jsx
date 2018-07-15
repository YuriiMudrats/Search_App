import React from "react";
import { Article } from "../../components/Article";
import { connect } from "react-redux";

const articleMapper = ({ id, extract
  , title }) => (
  <Article key={id} name={title} text={extract
  } link={id} />
);

const SearchBoard = ({ articleBoard }) => (
  <div>{articleBoard ? articleBoard.map(articleMapper) : null}</div>
);

function mapStateToProps(state) {
  return {
    articleBoard: state.links
  };
}

export default connect(mapStateToProps)(SearchBoard);
