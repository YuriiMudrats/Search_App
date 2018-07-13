import React from "react";
import { connect } from "react-redux";
import { LinksList } from "./Links";
import PropTypes from "prop-types";

const linkMapper = ({ id, title }) => (
  <LinksList key={id} id={id} link={title} />
);
const RefsBord = ({ lists }) => (
  <div className="refsDiv">{lists ? lists.map(linkMapper) : null}</div>
);

function checkArrayOrNull(props, propName) {
  const prop = props[propName];
  if (prop !== null && !Array.isArray(prop)) {
    throw new Error("lists must be null or array");
  }
}
RefsBord.propTypes = {
  lists: checkArrayOrNull
};

function mapStateToProps(state) {
  return { lists: state.links };
}

export default connect(mapStateToProps)(RefsBord);
