import "./App.scss";

import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/User/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
