import {
  GET_GOOGLE,
  INPUT_CHANGE,
  SUGEST_TO_STORE,
  CLEARE_SUGGESTIONS,
  WIKI_TO_STORE,
  CLICK_SUGGESTION
} from '../consts';

export function getGoogle(payload) {
  return {
    type: GET_GOOGLE,
    payload
  };
}

export function inputChange(payload) {
  return {
    type: INPUT_CHANGE,
    payload
  };
}
export function sugToStore(payload) {
  return {
    type: SUGEST_TO_STORE,
    payload
  };
}
export function clearSuggestions() {
  return { type: CLEARE_SUGGESTIONS };
}
export function wikiToStore(payload) {
  return {
    type: WIKI_TO_STORE,
    payload
  };
}
export function chooseSuggestion(payload) {
  return {
    type: CLICK_SUGGESTION,
    payload
  };
}

export function getOrder() {
  return (dispatch, getState, axios) => {
    const wiki = getState().queries;
    axios.post('/wiki', { wiki }).then(res => {
      const wikiPages = res.data.query.pages;
      const result = Object.keys(wikiPages).reduce((articlesArray, article) => {
        const reactArticle = {
          extract: wikiPages[article].extract,
          id: wikiPages[article].pageid,
          title: wikiPages[article].title
        };
        articlesArray.push(reactArticle);
        return articlesArray;
      }, []);
      dispatch(wikiToStore(result));
    });
    dispatch(clearSuggestions());
  };
}
export function getSuggestion(payload) {
  return (dispatch, getState, axios) => {
    axios.post('/queries', { queries: payload }).then(res => {
      dispatch(getGoogle(res.data[1]));
    });
  };
}
