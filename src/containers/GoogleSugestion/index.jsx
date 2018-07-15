import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { chooseSuggestion} from "../../actions";


class GoogleSuggestion extends PureComponent {
  showList = () =>
    this.props.googleLists.map((query, i) => (
      <li onClick={() => this.props.chooseSuggestion(query)} key={query + i}>
        {query}
      </li>
    ));

  render() {
    const { value } = this.props;
    return <ul className="google">{value ? this.showList() : null}</ul>;
  }
}

const mapDispatchToProps = {
  chooseSuggestion
};

export default connect(
  null,
  mapDispatchToProps
)(GoogleSuggestion);
