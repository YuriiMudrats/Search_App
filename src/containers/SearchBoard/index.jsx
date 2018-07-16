import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Article from '../../components/Article';

export class SearchBoard extends PureComponent {
  getArticles = ({ id, extract, title }) => (
    <Article key={id} name={title} text={extract} curId={id} />
  );

  render() {
    const { articleBoard } = this.props;

    return articleBoard ? (
      <div>{articleBoard.map(this.getArticles)}</div>
    ) : null;
  }
}

SearchBoard.propTypes = {
  articleBoard: PropTypes.arrayOf(
    PropTypes.shape({
      extract: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string
    })
  ).isRequired
};

function mapStateToProps({ wikiData }) {
  return {
    articleBoard: wikiData.links
  };
}

export default connect(mapStateToProps)(SearchBoard);
