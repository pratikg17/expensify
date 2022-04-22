import React, { useState, useEffect } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";
import { addUserExpense } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

function AddExpense() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(date);

    let expenseInfo = {
      title: data.title,
      category: data.category,
      amount: data.amount,
      incurred_on: date,
      notes: data.notes,
    };
    dispatch(addUserExpense(expenseInfo));
    reset();
  };

  const resetForm = () => {
    reset();
  };
  return (
    <DefaultLayout>
      <div>
        <Typography variant="h6" gutterBottom>
          Add New Expense
        </Typography>
        <br></br>
        <form component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Container maxWidth="sm">
            <Grid
              container
              component={Paper}
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={8} sm={8}>
                <TextField
                  required
                  id="title"
                  name="title"
                  label="Add Expense Title"
                  fullWidth
                  variant="standard"
                  {...register("title", {
                    required: "Expense Title is required.",
                  })}
                  error={Boolean(errors.title)}
                  helperText={errors.title?.message}
                />
              </Grid>
              <Grid item xs={8} sm={8}>
                <TextField
                  required
                  id="category"
                  name="category"
                  label="Add Expense Category"
                  fullWidth
                  variant="standard"
                  {...register("category", {
                    required: "Expense Category is required.",
                  })}
                  error={Boolean(errors.category)}
                  helperText={errors.category?.message}
                />
              </Grid>
              <Grid item xs={8} sm={8}>
                <TextField
                  required
                  type="number"
                  id="amount"
                  name="amount"
                  label="Add Expense Amount"
                  fullWidth
                  variant="standard"
                  {...register("amount", {
                    required: "Expense Amount is required.",
                  })}
                  error={Boolean(errors.amount)}
                  helperText={errors.amount?.message}
                />
              </Grid>
              <Grid item xs={8} sm={8}>
                <TextField
                  required
                  id="notes"
                  name="notes"
                  label="Additional Notes"
                  fullWidth
                  variant="standard"
                  {...register("notes")}
                />
              </Grid>
              <br />
              <br />
              <Grid item xs={12} sm={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Incurred On"
                    showTodayButton
                    value={date}
                    name="inccuredOn"
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                  <Button type="submit" variant="contained">
                    ADD EXPENSE
                  </Button>
                  <Button variant="contained" color="error" onClick={resetForm}>
                    CANCEL
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default AddExpense;
