import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../../components/Input";
import GoogleSuggestion from "../GoogleSugestion";
import { changeOrder, getSuggestion, inputChange } from "../../actions";
import LinksBoard from "../LinksBoard";
import SearchBoard from "../SearchBoard";
import SearchForm from '../../components/SearchForm'




class MainPage extends Component {
  changeOrder = e => {
    const { value } = e.target;
    this.props.inputChange(value);
    this.props.getSuggestion(value);
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.changeOrder();
  };
  onClick=e=>{
    console.log(e.target)

  }

  render() {
    const { query, suggestions } = this.props;
    return (
      <div className="container-fluid">
        <div className="form-inline">
          <SearchForm onSubmit={this.onSubmit} changeOrder={this.changeOrder} query={query} />
          <GoogleSuggestion
            onClick={this.onClick}
            query={query}
            googleLists={suggestions}
          />
        </div>
        <LinksBoard />
        <SearchBoard />
      </div>
    );
  }
}
const mapDispatchToProps = {
  inputChange,
  getSuggestion,
  changeOrder
};
function mapStateToProps(state) {
  return {
    query: state.queries,
    suggestions: state.suggestions
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);