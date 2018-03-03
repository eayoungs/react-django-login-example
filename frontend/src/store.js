import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "./reducers/";
import refreshAuthToken from "./customMiddleware/refreshAuthTokenMw";

export const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(reduxRouterMiddleware, refreshAuthToken, thunk, logger)
  )
);

//Email / Username login
let auth_token = localStorage.getItem("ecom_token");
if (auth_token) {
  store.dispatch({ type: "AUTHENTICATED" });
}
