import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chooseSuggestion } from '../../actions';

import './styles.scss';

export class GoogleSuggestion extends PureComponent {
  showList = () =>
    this.props.googleLists.map((query, i) => (
      <li className="search__list__item" onClick={() => this.props.chooseSuggestion(query)} key={query + i}>
        {query}
      </li>
    ));

  render() {
    return this.props.googleLists.length ? <ul className="search__list">{this.showList()}</ul> : null;
  }
}

GoogleSuggestion.propTypes = {
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
