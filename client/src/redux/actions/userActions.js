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
    toast.success("Login Success");
    dispatch({ type: "LOADING", payload: false });
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


export const addUserExpense = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const token = localStorage.getItem("token");
    await axios.post(`${baseUrl}/api/expense`, reqObj, {
      headers: {
        "x-auth-token": token, //the token is a variable which holds the token
      },
    });
    toast.success("Add Expense Success");
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
    dispatch({ type: "LOADING", payload: true });
  }
};

export const getUserExpenses = (params) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get(`${baseUrl}/api/expense`, {
      params,
      headers: {
        "x-auth-token": token, //the token is a variable which holds the token
      },
    });
    console.log(response);
    dispatch({ type: "GET_USER_EXPENSE", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    throw error;
  }
};
