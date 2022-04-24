import { baseUrl } from "../../config";
import jwt from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";

export const getMonthlyReport = (params, signal) => async (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({ type: "LOADING", payload: true });
    try {
      const response = await axios.get(
        `${baseUrl}/api/expense-report/scatter-plot-report`,
        {
          params,
          signal: signal,
          headers: {
            "x-auth-token": token, //the token is a variable which holds the token
          },
        }
      );
      dispatch({ type: "GET_MONTHLY_REPORT", payload: response.data });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      throw error;
    }
  };

  export const getYearlyReport = (params, signal) => async (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({ type: "LOADING", payload: true });
    try {
      const response = await axios.get(
        `${baseUrl}/api/expense-report/yearly-bar-report`,
        {
          params,
          signal,
          headers: {
            "x-auth-token": token, //the token is a variable which holds the token
          },
        }
      );
      dispatch({ type: "GET_YEARLY_REPORT", payload: response.data });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      throw error;
    }
  };