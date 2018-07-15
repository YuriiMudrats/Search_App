import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../../components/Input";
import GoogleSuggestion from "../GoogleSugestion";
import { getOrder, getSuggestion, inputChange } from "../../actions";
import LinksBoard from "../LinksBoard";
import SearchBoard from "../SearchBoard";




class MainPage extends Component {
  GetOrder = e => {
    const { value } = e.target;
    this.props.inputChange(value);
    this.props.getSuggestion(value);
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.getOrder();
  };
  onClick=e=>{
    console.log(e.target)

  }

  render() {
    const { value, suggestions } = this.props;
    return (
      <div className="container-fluid">
        <div className="form-inline">
          <form onSubmit={this.onSubmit}>
            <Input
              className="form-control"
              onChange={this.GetOrder}
              value={value}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
          <GoogleSuggestion
            onClick={this.onClick}
            value={value}
            googleLists={suggestions}
          />
        </div>
        <div>
          <LinksBoard />
        </div>
        <div>
          <SearchBoard />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  inputChange,
  getSuggestion,
  getOrder
};
function mapStateToProps(state) {
  return {
    value: state.queries,
    suggestions: state.suggestions
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
