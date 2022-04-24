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

    const monthStrings = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ]; 
      useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        if (yearly === null) {
          let data = { year: year.getFullYear() };
          dispatch(getYearlyReport(data, signal));
        } else {
          setYearlyExpense(yearly);
        }
      }, [yearly]);  

      const handleDateChange = (date) => {
        setYear(date);
        let data = { year: date.getFullYear() };
        dispatch(getYearlyReport(data));
      };             
      return (
        <DefaultLayout>
          {loading && <Spinner />}
          <Container maxWidth="100%">
            <Typography variant="h6" gutterBottom>
              Yearly Expense Bar Chart
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Select Year"
                  views={["year"]}
                  showTodayButton
                  value={year}
                  disableFuture
                  animateYearScrolling
                  onChange={(newValue) => {
                    handleDateChange(newValue);
                  }}
                  variant="inline"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
              component={Paper}
            >
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={10}
                height={300}
                width={450}
              >
                <VictoryAxis />
                <VictoryBar
                  categories={{
                    x: monthStrings,
                  }}
                  style={{
                    data: { fill: "#69f0ae", width: 20 },
                    labels: { fill: "#01579b" },
                  }}
                  data={yearlyExpense.monthTot}
                  x={monthStrings["x"]}
                  domain={{ x: [0, 13] }}
                  labels={({ datum }) => `$${datum.y}`}
                />
              </VictoryChart>
            </Box>
          </Container>
        </DefaultLayout>
      );

    }

export default YearlyReport;    