import { baseUrl } from "../../config";
import jwt from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post(`${baseUrl}/api/auth`, reqObj);
    const jwtToken = response.data.token;
    const decodedJwt = jwt(jwtToken);
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("user", JSON.stringify(decodedJwt));
    dispatch({ type: "LOADING", payload: false });
    toast.success("Login Success");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    toast.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(`${baseUrl}/api/user`, reqObj);
    toast.success("Login Success");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);

    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
    dispatch({ type: "LOADING", payload: true });
  }
};
