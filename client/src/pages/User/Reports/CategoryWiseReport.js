import React, { useState, useEffect } from "react";
import DefaultLayout from "../../../components/DefaultLayout";
import {
  Typography,
  Container,
  Box,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Spinner from "../../../components/Spinner";
import { getCategoryWiseReport } from "../../../redux/actions/reportActions";
import { useDispatch, useSelector } from "react-redux";
import { VictoryPie, VictoryTheme, VictoryLabel } from "victory";

function CategoryWiseReport() {
    const { categoryWise } = useSelector((state) => state.reportReducer);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertsReducer);
    const [expenses, setExpenses] = useState([]);
  
    const date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth();
    const [firstDay, setFirstDay] = useState(new Date(y, m, 1));
    const [lastDay, setLastDay] = useState(new Date(y, m + 1, 0));
  
    const handleDateChange = (name) => (date) => {
      if (name == "firstDay") {
        setFirstDay(date);
      } else {
        setLastDay(date);
      }
    };
  
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        if (categoryWise === null) {
          let data = { firstDay: firstDay, lastDay: lastDay };
          dispatch(getCategoryWiseReport(data, signal));
        } else {
          setExpenses(categoryWise);
          console.log("categoryWise", categoryWise);
        }
        return function cleanup() {
          abortController.abort();
        };
      }, [categoryWise]);
    
      const searchClicked = () => {
        let data = { firstDay: firstDay, lastDay: lastDay };
        dispatch(getCategoryWiseReport(data));
      };
    
      const resetClicked = () => {
        const date = new Date(),
          y = date.getFullYear(),
          m = date.getMonth();
    
        setFirstDay(new Date(y, m, 1));
        setLastDay(new Date(y, m + 1, 0));
        let query = {
          firstDay: new Date(y, m, 1),
          lastDay: new Date(y, m + 1, 0),
        };
        dispatch(getCategoryWiseReport(query));
      };
    
export default CategoryWiseReport;
