import * as types from "../../types/actionTypes";

const url = process.env.REACT_APP_DEV_URL;

const isChangingPassword = () => ({ type: types.IS_CHANGING_PASSWORD });
const changePasswordSuccess = () => ({
  type: types.CHANGE_PASSWORD_SUCCESS
});
const changePasswordFailure = err => ({
  type: types.CHANGE_PASSWORD_FAILURE,
  err
});

function changePassword(pwDetails) {
  return async function(dispatch) {
    try {
      dispatch(isChangingPassword());
      let response = await fetch(`${url}/auth/password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("ecom_token")}`
        },
        body: JSON.stringify(pwDetails)
      });
      console.log("CHANGE PASSWORD RESPONSE", response);
      if (!response.ok) {
        throw new Error("Invalid credentials, please try again.");
      }
      return dispatch(changePasswordSuccess());
    } catch (err) {
      return dispatch(changePasswordFailure(err));
    }
  };
}

export { changePassword };
