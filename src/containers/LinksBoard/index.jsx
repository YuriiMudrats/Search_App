import React from 'react';
import { connect } from 'react-redux';
import LinksList from '../../components/Links';
import PropTypes from 'prop-types';

export class LinksBoard extends React.PureComponent {
  linkListItem = ({ id, title }) => <LinksList key={id} id={id} link={title} />;

  render() {
    const { pending, lists, notFound } = this.props;

    if (pending) {
      return <div>Loading...</div>;
    }

    if (notFound) {
      return <div>Not found</div>;
    }

    return lists ? (
      <div className="refsDiv">{lists.map(this.linkListItem)}</div>
    ) : null;
  }
}

LinksBoard.propTypes = {
  pending: PropTypes.bool.isRequired,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      extract: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string
    })
  ).isRequired,
  notFound: PropTypes.bool.isRequired
};

function mapStateToProps({ wikiData }) {
  return {
    pending: wikiData.pending,
    lists: wikiData.links,
    notFound: wikiData.notFound
  };
}

export default connect(mapStateToProps)(LinksBoard);
