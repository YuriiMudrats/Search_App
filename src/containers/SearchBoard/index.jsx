import React from "react";
import { connect } from "react-redux";
import Article from "../../components/Article";

const articleMapper = ({ id, extract
  , title }) => (
  <Article key={id} name={title} text={extract
  } curId={id} />
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
