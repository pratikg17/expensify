import React, { useState, useEffect } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { updateUserExpense } from "../../redux/actions/userActions";
import { getExpenseById } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UpdateExpense({ match }) {
    const { selectedExpense } = useSelector((state) => state.userReducer);
    let history = useHistory();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertsReducer);
    const [expense, setExpense] = useState();
    const expenseId = match.params.expenseid;
    const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors },
    } = useForm();
    useEffect(() => {
      if (selectedExpense == null || selectedExpense._id != expenseId) {
        dispatch(getExpenseById(expenseId));
      } else {
        setExpense(selectedExpense);
        console.log("selectedExpense", selectedExpense);
        if (selectedExpense._id === expenseId) {
          setValue("title", selectedExpense.title);
          setValue("category", selectedExpense.category);
          setValue("notes", selectedExpense.notes);
          setValue("amount", selectedExpense.amount);
          setDate(selectedExpense.incurred_on);
        } else {
          dispatch(getExpenseById(expenseId));
        }
      }
    }, [selectedExpense]);



export default UpdateExpense;