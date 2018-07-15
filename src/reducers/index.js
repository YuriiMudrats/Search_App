import { combineReducers } from 'redux';

import searchInput from './searchInputReducer';
import googleSuggestion from './googleSuggestionReducer';
import wikiData from './wikiReducer';

const reducers = combineReducers({
  searchInput,
  googleSuggestion,
  wikiData
});

export default reducers;
