import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import List from "@mui/material/List";
import ExpenseItem from "../../components/ExpenseItem";
import TextField from "@mui/material/TextField";

function ListExpense() {
  const [toDate, setToDate] = React.useState(new Date());
  const [fromDate, setFromDate] = React.useState(new Date());

  const date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  const [firstDay, setFirstDay] = React.useState(new Date(y, m, 1));
  const [lastDay, setLastDay] = React.useState(new Date(y, m + 1, 0));

  function generate(element) {
    return [0, 1, 2, 3, 4, 5].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  const handleSearchFieldChange = (name) => (date) => {
    if (name == "firstDay") {
      setFirstDay(date);
    } else {
      setLastDay(date);
    }
  };

  return (
    <DefaultLayout>
      <Container maxWidth="100%">
        <Typography variant="h6" gutterBottom>
          Expense List
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="From..."
              showTodayButton
              value={firstDay}
              disableFuture
              onChange={handleSearchFieldChange("firstDay")}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="To..."
              showTodayButton
              value={lastDay}
              onChange={handleSearchFieldChange("lastDay")}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button variant="contained" color="success">
            GO
          </Button>
        </Box>

        <Grid component={Paper} spacing={2}>
          <List>
            {generate(
              <ExpenseItem
                primary="$100"
                secondary="Potatoes - Groceries"
                title="Potato"
                category="Groceries"
              ></ExpenseItem>
            )}
          </List>
        </Grid>
      </Container>
    </DefaultLayout>
  );
}

export default ListExpense;