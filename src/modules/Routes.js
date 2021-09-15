import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Signin from "./Signin";
import FirstPage from "./FirstPage";
import UserProfile from "./dashboard/UserProfile";
import AllModule from "./dashboard/AllModule";
import ModuleDetail from "./dashboard/ModuleDetail";
import LeaningDetail from "./dashboard/Leaning/LeaningDetail";
import AdminProfile from "./dashboard/admin/AdminProfile";
import CrateRoom from "./dashboard/admin/CrateRoom";
import UpdateRoom from "./dashboard/admin/UpdateRoom";
import TaskSetting from "./dashboard/admin/TaskSetting";
import UserSetting from "./dashboard/admin/UserSetting";
import UpdateUser from "./dashboard/admin/UpdateUser";

import SingUp from "./Signup";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <FirstPage></FirstPage>
      </Route>
      <Route path="/Signin">
        <Signin></Signin>
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
      <Route path="/createroom">
        <CrateRoom></CrateRoom>
      </Route>
      <Route path="/updateroom">
        <UpdateRoom></UpdateRoom>
      </Route>
      <Route path="/tasksetting">
        <TaskSetting></TaskSetting>
      </Route>
      <Route path="/usersetting">
        <UserSetting></UserSetting>
      </Route>
      <Route path="/updateuser">
        <UpdateUser></UpdateUser>
      </Route>
    </Switch>
  );
}
