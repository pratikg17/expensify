import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import ListIcon from "@mui/icons-material/List";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { Link } from "react-router-dom";
import PieChartIcon from "@mui/icons-material/PieChart";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PaidIcon from "@mui/icons-material/Paid";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
function handleLogout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  window.location.href = "/login";
}

export const mainListItems = (
  <React.Fragment>
    <ListItemButton button component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton button component={Link} to="/add-expense">
      <ListItemIcon>
        <PaidIcon />
      </ListItemIcon>
      <ListItemText primary="Add Expense" />
    </ListItemButton>
    <ListItemButton button component={Link} to="/list-expense">
      <ListItemIcon>
        <PriceCheckIcon />
      </ListItemIcon>
      <ListItemText primary="Expenses" />
    </ListItemButton>
    <ListItemButton button component={Link} to="/monthly">
      <ListItemIcon>
        <ShowChartIcon />
      </ListItemIcon>
      <ListItemText primary="Monthly Expenses" />
    </ListItemButton>
    <ListItemButton button component={Link} to="/yearly">
      <ListItemIcon>
        <StackedBarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Yearly Expenses" />
    </ListItemButton>
    <ListItemButton button component={Link} to="/category-wise">
      <ListItemIcon>
        <PieChartIcon />
      </ListItemIcon>
      <ListItemText primary="Category Report" />
    </ListItemButton>
    <ListItemButton button component={Link} to="/help">
      <ListItemIcon>
        <HelpCenterIcon/>
      </ListItemIcon>
      <ListItemText primary="Help Section" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton onClick={handleLogout}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);