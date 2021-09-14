import logo from "./logo.svg";
import "./App.css";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./modules/Signin";
import FirstPage from "./modules/FirstPage";
import UserProfile from "./modules/dashboard/UserProfile";
import AllModule from "./modules/dashboard/AllModule";
import Layout from "./modules/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  );
}

export default App;
