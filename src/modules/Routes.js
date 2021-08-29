import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import FirstPage from "./FirstPage";
import UserProfile from "./dashboard/UserProfile";
import AllModule from "./dashboard/AllModule";
import ModuleDetail from "./dashboard/ModuleDetail";
import LeaningDetail from "./dashboard/Leaning/LeaningDetail";
import AdminProfile from "./dashboard/admin/AdminProfile";
import SingUp from "./SingUp";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <FirstPage></FirstPage>
      </Route>
      <Route path="/Login">
        <Login></Login>
      </Route>
      <Route path="/singup">
        <SingUp></SingUp>
      </Route>
      <Route path="/userprofile">
        <UserProfile></UserProfile>
      </Route>
      <Route path="/adminprofile">
        <AdminProfile></AdminProfile>
      </Route>
      <Route path="/moduledetail">
        <ModuleDetail></ModuleDetail>
      </Route>
      <Route path="/LeaningDetail">
        <LeaningDetail></LeaningDetail>
      </Route>
      <Route path="/allmodule">
        <AllModule></AllModule>
      </Route>
    </Switch>
  );
}
