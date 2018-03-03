import * as types from "../../types/actionTypes";
import { push } from "react-router-redux";

let url = process.env.REACT_APP_DEV_URL;

function authenticateAction(userData, dispatch) {
  localStorage.setItem("ecom_token", userData.token);
  dispatch(push("/"));
  return dispatch({ type: types.AUTHENTICATED });
}

function registrationSuccessMessage() {
  return { type: types.REGISTRATION_SUCCESS_MESSAGE };
}

function registerAction(data) {
  return async function() {
    let response = await fetch(`${url}/auth/users/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    let responseJson = response.json();
    return responseJson;
  };
}

function loginAction(data) {
  return async function() {
    let response = await fetch(`${url}/auth/jwt/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    let responseJson = await response.json();
    return responseJson;
  };
}

// JWT tokens are not stored in our DB
function logoutAction() {
  localStorage.removeItem("ecom_token");
  return { type: types.UNAUTHENTICATED };
}

export {
  registerAction,
  loginAction,
  authenticateAction,
  logoutAction,
  registrationSuccessMessage
};
