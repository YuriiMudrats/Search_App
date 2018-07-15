import React from 'react';
import { connect } from 'react-redux';
import LinksList from '../../components/Links';
import PropTypes from 'prop-types';

class LinksBoard extends React.PureComponent {
  linkListItem = ({ id, title }) => <LinksList key={id} id={id} link={title} />;

  render() {
    const { lists } = this.props;

    return (
      <div className="refsDiv">
        {lists ? lists.map(this.linkListItem) : null}
      </div>
    );
  }
}

LinksBoard.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      extract: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string
    })
  ).isRequired
};

function mapStateToProps({ wikiData }) {
  return { lists: wikiData.links };
}

export default connect(mapStateToProps)(LinksBoard);
