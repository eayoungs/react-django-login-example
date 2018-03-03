const url = process.env.REACT_APP_DEV_URL;

const requestingDogData = () => ({ type: "SENDING_DOG_DATA" });
const receiveResponseDog = resp => ({ type: "RECEIVE_RESPONSE_DOG", resp });
const receiveErrorDog = err => ({ type: "RECEIVE_ERROR_DOG", err });

function requestDogs() {
  return async function(dispatch) {
    dispatch(requestingDogData());
    try {
      let response = await fetch(`${url}/testing/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `JWT ${localStorage.getItem("ecom_token")}`
        }
      });
      if (!response.ok) {
        throw new Error("Authorized Request Failed");
      }
      let responseJson = await response.json();
      return dispatch(receiveResponseDog(responseJson));
    } catch (err) {
      dispatch(receiveErrorDog(err));
    }
  };
}

export { requestDogs };
