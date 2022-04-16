import { baseUrl } from "../../config";
import jwt from "jwt-decode";
import axios from "axios";

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(`${baseUrl}/api/auth`, reqObj);

    const jwtToken = response.data.token;
    const decodedJwt = jwt(jwtToken);

    localStorage.setItem("token", jwtToken);

    localStorage.setItem("user", JSON.stringify(decodedJwt));
    dispatch({ type: "LOADING", payload: false });
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
