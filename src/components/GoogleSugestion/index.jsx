import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ChooseSuggestion} from "../../store/actions";


class GoogleSuggestion extends PureComponent {
  showList = () =>
    this.props.googleLists.map((queri, i) => (
      <li onClick={() => this.props.ChooseSuggestion(queri)} key={queri + i}>
        {queri}
      </li>
    ));

  render() {
    const { value } = this.props;
    return <ul className="google">{value ? this.showList() : null}</ul>;
  }
}

const mapDispatchToProps = {
  ChooseSuggestion
};

export default connect(
  null,
  mapDispatchToProps
)(GoogleSuggestion);
