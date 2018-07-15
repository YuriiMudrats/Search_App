import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

const SearchForm = ({ query, onSubmit, changeOrder }) => (
  <form onSubmit={onSubmit}>
    <Input onChange={changeOrder} value={query} />
    <button type="submit">
      Search
    </button>
  </form>
);

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  changeOrder: PropTypes.func.isRequired
};

export default SearchForm;
