import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import authReducer from "./auth/authReducer";
import changePasswordReducer from "./auth/changePasswordReducer";

const rootReducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
  change_password: changePasswordReducer
});

export default rootReducer;
