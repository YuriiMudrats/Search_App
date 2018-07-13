import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getOrder, clearSuggestions } from "../../store/actions";

class GoogleSuggestion extends PureComponent {
  showList = () =>
    this.props.googleLists.map((queri, i) => (
      <li onClick={() => this.props.getOrder(queri)} key={queri + i}>
        {queri}
      </li>
    ));

  render() {
    const { value } = this.props;
    return <ul className="google">{value ? this.showList() : null}</ul>;
  }
}

const mapDispatchToProps = {
  getOrder
};

export default connect(
  null,
  mapDispatchToProps
)(GoogleSuggestion);
