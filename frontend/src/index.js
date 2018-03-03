import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { history } from "./store";

import { store } from "./store";
import { AuthenticatedRoute } from "./customRoutes/ProtectedRoutes";

import Navigation from "./containers/NavigationContainer";
import HomePage from "./containers/HomePageContainer";
import Login from "./containers/auth/LoginContainer";
import Register from "./containers/auth/RegisterContainer";
import ChangePassword from "./containers/auth/ChangePasswordContainer";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <AuthenticatedRoute exact path="/login" component={Login} />
          <AuthenticatedRoute exact path="/register" component={Register} />
          <Route exact path="/signout" render={() => <Redirect to="/" />} />
          <Route exact path="/changepassword" component={ChangePassword} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
