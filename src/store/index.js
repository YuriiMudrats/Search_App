import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";
import axios from "axios";
import thunk from "redux-thunk";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axios)))
);
