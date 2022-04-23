import React, { useState, useEffect } from "react";
import DefaultLayout from "../../../components/DefaultLayout";
import { Typography, Container, Box, TextField, Paper } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Spinner from "../../../components/Spinner";
import {
  VictoryTheme,
  VictoryScatter,
  VictoryChart,
  VictoryTooltip,
  VictoryLabel,
} from "victory";

import { getMonthlyReport } from "../../../redux/actions/reportActions";
import { useDispatch, useSelector } from "react-redux";

function MonthlyReport() {
    const { monthly } = useSelector((state) => state.reportReducer);
    const [error, setError] = useState("");
    const [plot, setPlot] = useState([]);
    const [month, setMonth] = useState(new Date());
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertsReducer);
  
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        if (monthly === null) {
          let data = { month: month.toDateString() };
          dispatch(getMonthlyReport(data, signal));
        } else {
          setPlot(monthly);
        }
      }, [monthly]);

      const handleDateChange = (date) => {
        setMonth(date);
        let data = { month: date.toDateString() };
        dispatch(getMonthlyReport(data));
      };

    }      
export default MonthlyReport;