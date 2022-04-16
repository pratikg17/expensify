import "./App.scss";

import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/User/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
