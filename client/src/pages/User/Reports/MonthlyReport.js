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
  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Container maxWidth="100%">
        <Typography variant="h6" gutterBottom>
          Monthly Scatter Plot
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
              label="Select Month"
              views={["month"]}
              showTodayButton
              value={month}
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
            height={400}
            width={550}
            domainPadding={40}
          >
            <VictoryScatter
              style={{
                data: { fill: "#01579b", stroke: "#69f0ae", strokeWidth: 2 },
                labels: { fill: "#01579b", fontSize: 10, padding: 8 },
              }}
              bubbleProperty="y"
              maxBubbleSize={15}
              minBubbleSize={5}
              labels={({ datum }) => `$${datum.y} on ${datum.x}th`}
              labelComponent={<VictoryTooltip />}
              data={plot}
              domain={{ x: [0, 31] }}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: 14, fill: "#8b8b8b" }}
              x={270}
              y={390}
              text={`day of month`}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: 14, fill: "#8b8b8b" }}
              x={6}
              y={190}
              angle={270}
              text={`Amount ($)`}
            />
          </VictoryChart>
        </Box>
      </Container>
    </DefaultLayout>
  );
}

export default MonthlyReport;
