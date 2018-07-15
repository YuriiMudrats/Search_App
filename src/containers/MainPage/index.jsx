import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../../components/Input";
import GoogleSuggestion from "../GoogleSugestion";
import { changeOrder, getSuggestion, inputChange } from "../../actions";
import LinksBoard from "../LinksBoard";
import SearchBoard from "../SearchBoard";
import SearchForm from '../../components/SearchForm'

import './styles.scss'




class MainPage extends Component {
  changeOrder = e => {
    const { value } = e.target;

    this.props.getSuggestion(value);
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.changeOrder();
  };

  render() {
    const { query, suggestions } = this.props;
    return (
      <div className="container-fluid">
        <div className="form-inline">
          <SearchForm onSubmit={this.onSubmit} changeOrder={this.changeOrder} query={query} />
          <GoogleSuggestion
            googleLists={suggestions}
          />
        </div>
        <LinksBoard />
        <SearchBoard />
      </div>
    );
  }
}

function mapStateToProps({ searchInput, googleSuggestion}) {
  return {
    query: searchInput.queries,
    suggestions: googleSuggestion.suggestions
  };
}


const mapDispatchToProps = {
  inputChange,
  getSuggestion,
  changeOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
