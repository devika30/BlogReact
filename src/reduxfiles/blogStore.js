import { createStore, applyMiddleware } from "redux";
import blogReducer from "./blogReducer";
import thunk from "redux-thunk";
import { compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const blogStore = createStore(
  blogReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default blogStore;
