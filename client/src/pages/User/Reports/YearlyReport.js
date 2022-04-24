import React, { useState, useEffect } from "react";
import DefaultLayout from "../../../components/DefaultLayout";
import { Typography, Container, Box, TextField, Paper } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Spinner from "../../../components/Spinner";
import { VictoryTheme, VictoryAxis, VictoryBar, VictoryChart } from "victory";
import { getYearlyReport } from "../../../redux/actions/reportActions";
import { useDispatch, useSelector } from "react-redux";

function YearlyReport() {
    const { yearly } = useSelector((state) => state.reportReducer);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertsReducer);
    const [year, setYear] = useState(new Date());
    const [yearlyExpense, setYearlyExpense] = useState([]);
 
}

export default YearlyReport;    