import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chooseSuggestion } from '../../actions';

class GoogleSuggestion extends PureComponent {
  showList = () =>
    this.props.googleLists.map((query, i) => (
      <li onClick={() => this.props.chooseSuggestion(query)} key={query + i}>
        {query}
      </li>
    ));

  render() {
    const { query } = this.props;
    return query ? <ul>{this.showList()}</ul> : null;
  }
}

GoogleSuggestion.propTypes = {
  query: PropTypes.string.isRequired,
  googleLists: PropTypes.arrayOf(PropTypes.string).isRequired,
  chooseSuggestion: PropTypes.func
};

const mapDispatchToProps = {
  chooseSuggestion
};

export default connect(
  null,
  mapDispatchToProps
)(GoogleSuggestion);
