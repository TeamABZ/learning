import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link, Switch, Route, BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    padding: 0,
  },
}));
export default function Content() {
  return <Routes></Routes>;
}
