import logo from "./logo.svg";
import "./App.css";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import FirstPage from "./component/FirstPage";
import UserProfile from "./component/dashboard/UserProfile";
import AllModule from "./component/dashboard/AllModule";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FirstPage}></Route>

        <Route path="/Login" component={Login}></Route>
        <Route path="/userprofile" component={UserProfile}></Route>
        <Route path="/allmodule" component={AllModule}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
