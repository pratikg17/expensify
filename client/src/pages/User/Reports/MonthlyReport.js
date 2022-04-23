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
