import "./App.scss";

import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/User/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddExpense from "./pages/User/AddExpense";
import ListExpense from "./pages/User/ListExpense";
import Help from "./pages/Help";
import UpdateExpense from "./pages/User/UpdateExpense";
import MonthlyReport from "./pages/User/Reports/MonthlyReport";
import CategoryWiseReport from "./pages/User/Reports/CategoryWiseReport";
import YearlyReport from "./pages/User/Reports/YearlyReport";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProtectedRoute
          path="/add-expense"
          exact
          component={AddExpense}
        ></ProtectedRoute>
        <ProtectedRoute
          path="/update-expense/:expenseid"
          exact
          component={UpdateExpense}
        ></ProtectedRoute>
        <ProtectedRoute
          path="/list-expense"
          exact
          component={ListExpense}
        ></ProtectedRoute>
        <ProtectedRoute
          path="/help"
          exact 
          component={Help}
        ></ProtectedRoute>
        <ProtectedRoute
          path="/monthly"
          exact
          component={MonthlyReport}
        ></ProtectedRoute>
        <ProtectedRoute
          path="/yearly"
          exact
          component={YearlyReport}
        ></ProtectedRoute>
        <ProtectedRoute
          path="/category-wise"
          exact
          component={CategoryWiseReport}
        ></ProtectedRoute>
        <ProtectedRoute path="/" exact component={Home}></ProtectedRoute>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}

export function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("user");
  console.log("this", isAuthenticated);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default App;
