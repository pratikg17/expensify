import React, { useState, useEffect } from "react";
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
import {
  getUserExpenses,
  deleteUserExpenses,
} from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function ListExpense() {
  const dispatch = useDispatch();
  const { expenseHistory } = useSelector((state) => state.userReducer);
  const date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  const [firstDay, setFirstDay] = useState(new Date(y, m, 1));
  const [lastDay, setLastDay] = useState(new Date(y, m + 1, 0));

  useEffect(() => {
    let query = {
      start_date: firstDay,
      end_date: lastDay,
    };
    dispatch(getUserExpenses(query));
    console.log("expenseHistory", expenseHistory);
  }, []);

  const deleteUserExpense = (expenseId) => {
    console.log("expenseId", expenseId);
    let query = {
      start_date: firstDay,
      end_date: lastDay,
    };
    dispatch(deleteUserExpenses(expenseId, query));
  };

  const handleSearchFieldChange = (name) => (date) => {
    if (name === "firstDay") {
      setFirstDay(date);
    } else {
      setLastDay(date);
    }
  };

  const searchClicked = () => {
    let query = {
      start_date: firstDay,
      end_date: lastDay,
    };
    dispatch(getUserExpenses(query));
  };

  const resetClicked = () => {
    const date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth();
    setFirstDay(new Date(y, m, 1));
    setLastDay(new Date(y, m + 1, 0));
    let query = {
      start_date: new Date(y, m, 1),
      end_date: new Date(y, m + 1, 0),
    };
    dispatch(getUserExpenses(query));
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
          <Box sx={{ p: 1, m: 2, justifyContent: "space-between" }}>
            <Button variant="contained" color="success" onClick={searchClicked}>
              FILTER
            </Button>
            &nbsp;
            <Button variant="contained" color="error" onClick={resetClicked}>
              RESET
            </Button>
          </Box>
        </Box>

        <Grid component={Paper} spacing={2}>
          <List>
            {expenseHistory.map((expense) => {
              return (
                <ExpenseItem
                  primary={expense.amount}
                  title={expense.title}
                  category={expense.category}
                  notes={expense.notes}
                  date={expense.incurred_on}
                  expenseId={expense._id}
                  delete={deleteUserExpense}
                ></ExpenseItem>
              );
            })}
          </List>
        </Grid>
      </Container>
    </DefaultLayout>
  );
}

export default ListExpense;
