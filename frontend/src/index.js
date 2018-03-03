import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { history } from "./store";

import { store } from "./store";
import {
  PrivateRoute,
  AuthenticatedRoute
} from "./customRoutes/ProtectedRoutes";
// import HomePage from "./containers/posts/HomePageContainer";
// import PostDetail from "./containers/posts/PostDetailContainer";
// import FilterPosts from "./containers/posts/FilterPostsContainer";
// import AutocompletePost from "./containers/posts/AutocompletePostContainer";
// import About from "./components/author/About";
// import EditProfile from "./containers/userProfile/EditProfileContainer";
// import Contact from "./containers/ContactContainer";
// import ScrollToTopRoute from "./components/reusableComponents/ScrollToTopRoute";
// import ScrollToTop from "react-scroll-up";
// import Register from "./containers/authentication/RegisterContainer";
// import VerifyEmail from "./containers/authentication/VerifyEmailContainer";
// import RequestPasswordReset from "./containers/authentication/RequestPasswordResetContainer";
// import PasswordResetConfirm from "./containers/authentication/PasswordResetConfirmContainer.js";
// import Login from "./containers/authentication/LoginContainer";
// import ChangePassword from "./containers/authentication/ChangePasswordContainer";
// import NavBar from "./containers/NavBarContainer";
// import Footer from "./components/reusableComponents/Footer";
// import Http404Page from "./components/reusableComponents/Http404Page";
// import {
//   PrivateRoute,
//   AuthenticatedRoute
// } from "./customRoutes/ProtectedRoutes";
import Navigation from "./containers/NavigationContainer";
import HomePage from "./containers/HomePageContainer";
import Login from "./containers/auth/LoginContainer";
import Register from "./containers/auth/RegisterContainer";
import ChangePassword from "./containers/auth/ChangePasswordContainer";

import DogList from "./containers/dogs/DogListContainer";

console.log(process.env.REACT_APP_DEV_URL);
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
          <Route exact path="/testing" component={DogList} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// <Route exact path="/signout" render={() => <Redirect to="/" />} />
// <AuthenticatedRoute exact path="/register" component={Register} />
// <AuthenticatedRoute exact path="/login" component={Login} />
// <PrivateRoute path="/changepassword" component={ChangePassword} />
// <Route exact path="/reset" component={RequestPasswordReset} />
// <Route
//   exact
//   path="/reset/:uid/:token"
//   component={PasswordResetConfirm}
// />
// <Route exact path="/profile" component={EditProfile} />
// <Route exact path="/about" component={About} />
// <Route exact path="/contact" component={Contact} />
// <Route exact path="/browse" component={AutocompletePost} />
// <Route exact path="/verify-email/:key" component={VerifyEmail} />
// <Route path="/posts/*" component={FilterPosts} />
// <Route exact path="/:slug" component={PostDetail} />
// <Route path="*" component={Http404Page} />
